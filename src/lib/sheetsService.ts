import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
  signOut
} from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/spreadsheets');
provider.addScope('https://www.googleapis.com/auth/drive.file');

let cachedAccessToken: string | null = null;
let isSigningIn = false;

// Initialize auth state
export const initAuth = (
  onAuthSuccess?: (user: User, token: string) => void,
  onAuthFailure?: () => void
) => {
  return onAuthStateChanged(auth, async (user: User | null) => {
    if (user && cachedAccessToken) {
      if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
    } else {
      cachedAccessToken = null;
      if (onAuthFailure) onAuthFailure();
    }
  });
};

export const googleSignIn = async (): Promise<{ user: User; accessToken: string } | null> => {
  try {
    isSigningIn = true;
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential?.accessToken) {
      throw new Error('Google OAuth 액세스 토큰을 받아오지 못했습니다.');
    }
    cachedAccessToken = credential.accessToken;
    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error) {
    console.error('Google Sign-in error:', error);
    throw error;
  } finally {
    isSigningIn = false;
  }
};

export const getCachedAccessToken = (): string | null => {
  return cachedAccessToken;
};

export const googleSignOut = async () => {
  await signOut(auth);
  cachedAccessToken = null;
};

const SHEET_ID_STORAGE_KEY = 'ug_telecom_google_sheet_id';

export const getSavedSpreadsheetId = (): string | null => {
  return localStorage.getItem(SHEET_ID_STORAGE_KEY);
};

export const saveSpreadsheetId = (spreadsheetId: string) => {
  localStorage.setItem(SHEET_ID_STORAGE_KEY, spreadsheetId);
};

export interface InquiryData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  category: string;
  projectRegion: string;
  schedule: string;
  message: string;
  fileName?: string;
  submittedAt?: string;
}

/**
 * Creates a new Spreadsheet for inquiries with header row
 */
export const createInquirySpreadsheet = async (accessToken: string): Promise<string> => {
  const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      properties: {
        title: '[㈜유지텔레컴] 프로젝트 문의 접수현황'
      },
      sheets: [
        {
          properties: {
            title: '문의내역'
          },
          data: [
            {
              startRow: 0,
              startColumn: 0,
              rowData: [
                {
                  values: [
                    { userEnteredValue: { stringValue: '접수일시' } },
                    { userEnteredValue: { stringValue: '회사명(기관명)' } },
                    { userEnteredValue: { stringValue: '담당자 성함' } },
                    { userEnteredValue: { stringValue: '이메일' } },
                    { userEnteredValue: { stringValue: '연락처' } },
                    { userEnteredValue: { stringValue: '문의분야' } },
                    { userEnteredValue: { stringValue: '프로젝트 지역' } },
                    { userEnteredValue: { stringValue: '예상 착공일정' } },
                    { userEnteredValue: { stringValue: '첨부파일명' } },
                    { userEnteredValue: { stringValue: '문의내용' } }
                  ]
                }
              ]
            }
          ]
        }
      ]
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`구글 시트 생성 실패: ${errText}`);
  }

  const data = await response.json();
  const spreadsheetId = data.spreadsheetId;
  saveSpreadsheetId(spreadsheetId);
  return spreadsheetId;
};

/**
 * Appends inquiry data to Google Sheet
 */
export const appendInquiryToSheet = async (
  data: InquiryData,
  accessToken: string,
  existingSheetId?: string
): Promise<{ spreadsheetId: string; spreadsheetUrl: string }> => {
  let spreadsheetId = existingSheetId || getSavedSpreadsheetId();

  // If no spreadsheet exists yet, create one
  if (!spreadsheetId) {
    spreadsheetId = await createInquirySpreadsheet(accessToken);
  }

  const timestamp = data.submittedAt || new Date().toLocaleString('ko-KR');

  const rowValues = [
    timestamp,
    data.companyName,
    data.contactName,
    data.email,
    data.phone,
    data.category,
    data.projectRegion || '-',
    data.schedule || '-',
    data.fileName || '-',
    data.message
  ];

  // Try appending to sheet "문의내역" or fallback to range A:J
  const appendUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A1:append?valueInputOption=USER_ENTERED`;

  const appendResponse = await fetch(appendUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      values: [rowValues]
    })
  });

  if (!appendResponse.ok) {
    // If spreadsheet was deleted or bad ID, try creating a fresh one and retry once
    if (appendResponse.status === 404) {
      spreadsheetId = await createInquirySpreadsheet(accessToken);
      const retryResponse = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A1:append?valueInputOption=USER_ENTERED`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ values: [rowValues] })
        }
      );
      if (!retryResponse.ok) {
        throw new Error('구글 시트에 데이터 추가에 실패했습니다.');
      }
    } else {
      const errText = await appendResponse.text();
      throw new Error(`구글 시트 전송 오류 (${appendResponse.status}): ${errText}`);
    }
  }

  const spreadsheetUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}`;
  return { spreadsheetId, spreadsheetUrl };
};
