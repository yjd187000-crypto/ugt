import React from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import { Button } from '../ui/Button';
import { PhoneCall, FileText, ArrowRight, MessageSquare } from 'lucide-react';

interface InquiryCTAProps {
  onOpenBrochure: () => void;
}

export const InquiryCTASection: React.FC<InquiryCTAProps> = ({ onOpenBrochure }) => {
  return (
    <section className="py-20 md:py-28 bg-ug-navy text-white relative overflow-hidden">
      {/* Background Lighting & Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-400/20 text-amber-400 rounded-full border border-amber-400/30 mb-6 text-xs font-bold uppercase tracking-wider">
          <MessageSquare className="w-4 h-4" />
          PARTNERSHIP & PROJECT INQUIRY
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
          성공적인 인프라 구축을 위한 <br />
          <span className="text-amber-400">신뢰할 수 있는 파트너</span>가 필요하십니까?
        </h2>

        <p className="text-sm md:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          광통신, 5G/LTE 기지국, 고속도로 ITS, 철도통신, 전기설비 공사 견적 및 기술 타당성 검토를 20년 현장 경험의 기술팀이 신속히 안내해 드립니다.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <Button
            variant="primary"
            to="/contact"
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
            className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-extrabold text-base py-3.5 px-6 w-full sm:w-auto shadow-lg shadow-amber-400/20"
          >
            프로젝트 문의하기
          </Button>

          <Button
            variant="inverted"
            onClick={onOpenBrochure}
            icon={<FileText className="w-5 h-5 text-ug-navy" />}
            className="py-3.5 px-6 text-base font-bold w-full sm:w-auto"
          >
            회사소개서 다운로드
          </Button>

          <Button
            variant="outlined"
            href={`tel:${COMPANY_INFO.phone}`}
            icon={<PhoneCall className="w-5 h-5" />}
            className="py-3.5 px-6 text-base font-semibold border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
          >
            대표전화 연결 ({COMPANY_INFO.phone})
          </Button>
        </div>

      </div>
    </section>
  );
};
