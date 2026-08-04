import React from 'react';
import { CERTIFICATES_DATA } from '../data/companyData';
import { Button } from '../components/ui/Button';
import { ShieldCheck, Award, FileText, CheckCircle2, AlertCircle, Building, Cpu, ShieldAlert } from 'lucide-react';

interface TechPageProps {
  onOpenBrochure: () => void;
}

export const TechnologyPage: React.FC<TechPageProps> = ({ onOpenBrochure }) => {
  return (
    <div className="pt-20 md:pt-28 pb-20 bg-slate-50 text-slate-900">
      
      {/* Banner */}
      <section className="bg-telecom-black text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
            TECHNOLOGY, QUALITY & SAFETY · 기술·품질·안전
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            품질과 안전이 약속하는 <br />
            <span className="text-amber-400">100% 무하자 시공</span>
          </h1>
          <p className="text-slate-300 max-w-2xl text-sm md:text-base leading-relaxed">
            정보통신공사업·전기공사업 면허, ISO 9001/14001/45001 인증 및 기업부설연구소를 바탕으로 철저한 현장 관리 체계를 가동합니다.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 my-16">
        
        {/* Licenses and Certifications Grid */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-ug-navy uppercase block mb-1">CERTIFICATIONS & LICENSES</span>
              <h2 className="text-2xl font-bold text-slate-900">보유 면허 및 국제 표준 인증</h2>
            </div>
            <Button variant="outlined" onClick={onOpenBrochure} className="mt-2 md:mt-0 text-xs">
              인증서 사본 요청 (회사소개서)
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATES_DATA.map((cert) => (
              <div key={cert.id} className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-ug-navy text-amber-400 font-bold text-[10px] rounded">
                    {cert.category}
                  </span>
                  <Award className="w-4 h-4 text-amber-500" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">{cert.title}</h3>
                <p className="text-xs text-slate-500">발급기관: {cert.issuer}</p>
                <p className="text-xs text-slate-600 bg-white p-3 rounded border border-slate-200 leading-relaxed">
                  {cert.desc}
                </p>
                <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200 space-y-0.5">
                  <p>• {cert.certNumberPlaceholder}</p>
                  <p className="text-amber-700 font-medium">• {cert.validPeriodPlaceholder}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Personnel & Equipment Capacity */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <span className="text-xs font-bold text-ug-navy uppercase block mb-1">ENGINEERING CAPACITY</span>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">전문 기술인력 보유 현황</h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
              유지텔레컴은 국가 정식 자격(정보통신기사, 전기기사, 산업안전기사)을 보유한 180여 명의 전문 엔지니어와 시공 기술팀을 상시 운용합니다.
            </p>

            <div className="space-y-3 text-xs md:text-sm">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-700">정보통신 기술자 자격 보유자</span>
                <span className="font-bold text-ug-navy">고급/중급/초급 다수 상시 배치</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-700">전기공사 기술자 자격 보유자</span>
                <span className="font-bold text-ug-navy">수배전/전력 자격보유자</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-700">안전보건관리 전담인력</span>
                <span className="font-bold text-amber-600">산업안전기사/건설안전기사</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold text-ug-navy uppercase block mb-1">R&D & INNOVATION</span>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">기업부설연구소 (R&D)</h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
              한국산업기술진흥협회(KOITA)로부터 정식 인정을 받은 기업부설연구소를 통해 차세대 광통신 측정 및 특수 환경 시공 공법을 지속 연구개발합니다.
            </p>

            <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Cpu className="w-5 h-5" />
                <span>주요 연구개발 영역</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>광선로 OTDR 손실 자동 감지 및 원격 진단 알고리즘</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>이음5G 특화망 전파 음영 해소 안테나 배치 가이드</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>현장 고소작업자 스마트 안전조끼 모니터링 체계</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Safety Statistics Section ("자료 준비 중" notice) */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
            <ShieldAlert className="w-5 h-5 text-amber-600" />
            <h3 className="text-lg font-bold text-slate-900">안전보건 관련 공식 통계 지표</h3>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl text-center space-y-3">
            <AlertCircle className="w-8 h-8 text-amber-500 mx-auto" />
            <h4 className="text-base font-bold text-slate-800">
              안전보건공단 2024년도 재해율 정기 공시 통계 자료 준비 중
            </h4>
            <p className="text-xs text-slate-500 max-w-xl mx-auto">
              유지텔레컴은 허위 수치를 기재하지 않으며, 산업안전보건공단 및 고용노동부 공식 공시 결과가 확정되는 대로 최신 데이터로 업데이트될 예정입니다.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};
