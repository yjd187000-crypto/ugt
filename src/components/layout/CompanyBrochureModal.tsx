import React, { useState } from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import { Button } from '../ui/Button';
import { X, Download, FileText, CheckCircle2, ShieldCheck, PhoneCall } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompanyBrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    // Simulate browser download trigger
    const element = document.createElement('a');
    const file = new Blob([
      `==================================================\n` +
      `[㈜유지텔레컴 Company Profile Brochure Summary]\n` +
      `==================================================\n\n` +
      `회사명: ${COMPANY_INFO.name}\n` +
      `영문명: ${COMPANY_INFO.englishName}\n` +
      `대표이사: ${COMPANY_INFO.ceo}\n` +
      `설립일자: ${COMPANY_INFO.established}\n` +
      `본사주소: ${COMPANY_INFO.address}\n` +
      `대표전화: ${COMPANY_INFO.phone}\n` +
      `공식이메일: ${COMPANY_INFO.email}\n\n` +
      `[슬로건]\n${COMPANY_INFO.sloganKo}\n"${COMPANY_INFO.sloganEn}"\n\n` +
      `[주요 사업영역]\n` +
      `1. 이동통신망 (5G/LTE 기지국, 인빌딩, 특화망)\n` +
      `2. 광통신망 (FTTH/FTTB, 기간 광전송망, 광접속)\n` +
      `3. 네트워크 인프라 (통신국사, 백본, 구내통신)\n` +
      `4. ITS·스마트시티 (지능형 교통체계, C-ITS)\n` +
      `5. 철도통신 (LTE-R 무선망, LCX, 본선 광통신)\n` +
      `6. 전기·유지보수 (수배전반, UPS, 24/7 장애대응)\n\n` +
      `[핵심 인증 및 면허]\n` +
      `- 정보통신공사업 면허\n` +
      `- 전기공사업 면허\n` +
      `- ISO 9001 / ISO 14001 / ISO 45001\n` +
      `- 기업부설연구소 (KOITA 인정)\n`
    ], { type: 'text/plain;charset=utf-8' });
    
    element.href = URL.createObjectURL(file);
    element.download = '유지텔레컴_회사소개서_요약본.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-ug-navy text-amber-400 rounded-xl">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">㈜유지텔레컴 회사소개서</h3>
            <p className="text-xs text-slate-500">2024-2025 최신 기업 지면 브로슈어 요약본</p>
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3 mb-6 text-xs text-slate-600">
          <div className="flex justify-between pb-2 border-b border-slate-200">
            <span className="font-semibold text-slate-700">문서명</span>
            <span>UG_Telecom_Company_Profile_2024.pdf</span>
          </div>
          <div className="flex justify-between pb-2 border-b border-slate-200">
            <span className="font-semibold text-slate-700">포함 내용</span>
            <span>기업개요, 사업영역, 주요실적, 품질/안전체계</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-slate-700">보안 규정</span>
            <span className="text-amber-600 font-medium">공공/대외용 공개 가능 버전</span>
          </div>
        </div>

        {downloaded ? (
          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-center text-xs text-emerald-800 mb-6">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
            <p className="font-bold">회사소개서 다운로드가 실행되었습니다.</p>
            <p className="text-emerald-700 mt-0.5">추가 자료 및 입찰 관련 서류 요청은 대표전화로 문의해 주세요.</p>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
            <span>본 회사소개서는 ㈜유지텔레컴의 공식 대외용 정보통신 인프라 소개 자료입니다.</span>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="primary"
            onClick={handleDownload}
            icon={<Download className="w-4 h-4" />}
            fullWidth
          >
            회사소개서 다운로드
          </Button>
          <Button
            variant="outlined"
            href={`tel:${COMPANY_INFO.phone}`}
            icon={<PhoneCall className="w-4 h-4" />}
            fullWidth
          >
            전화 문의
          </Button>
        </div>
      </div>
    </div>
  );
};
