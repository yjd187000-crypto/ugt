export interface MetricItem {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
  note?: string; // 주석: 근거 확인 필요 등
}

export interface BusinessItem {
  id: string;
  title: string;
  englishTitle: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  features: string[];
  iconName: string;
  bgImage: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client?: string; // 승인된 발주처만
  category: '이동통신' | '광통신' | 'ITS' | '철도' | '공공·국방' | '전기';
  year: string;
  period: string;
  scope: string;
  region: string;
  lat?: number;
  lng?: number;
  image: string;
  description: string;
  highlights: string[];
  isDemoLocation?: boolean; // 데모 데이터 구분 여부
}

export interface CertificateItem {
  id: string;
  title: string;
  englishTitle: string;
  issuer: string;
  category: '공사업 면허' | 'ISO 인증' | '연구소/기타';
  desc: string;
  certNumberPlaceholder: string; // "인증번호: 보안/확인 필요"
  validPeriodPlaceholder: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: '정규직' | '계약직';
  experience: string;
  deadline: string;
  tasks: string[];
  requirements: string[];
}

export interface HistoryItem {
  year: string;
  events: string[];
}

export interface InquiryFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  category: '이동통신' | '광통신' | 'ITS' | '철도' | '전기' | '유지보수' | '기타';
  projectRegion: string;
  schedule: string;
  message: string;
  fileName?: string;
  privacyAgreed: boolean;
}
