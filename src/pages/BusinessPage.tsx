import React from 'react';
import { BUSINESS_DATA } from '../data/companyData';
import { Tag } from '../components/ui/Tag';
import { Button } from '../components/ui/Button';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface BusinessPageProps {
  onOpenContact: () => void;
}

export const BusinessPage: React.FC<BusinessPageProps> = ({ onOpenContact }) => {
  return (
    <div className="pt-20 md:pt-28 pb-20 bg-slate-50 text-slate-900">
      
      {/* Banner */}
      <section className="bg-ug-navy text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
            BUSINESS DOMAINS · 사업영역
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            국가 핵심 네트워킹을 위한 <br />
            <span className="text-amber-400">통합 엔지니어링 솔루션</span>
          </h1>
          <p className="text-slate-300 max-w-2xl text-sm md:text-base leading-relaxed">
            광통신망, 5G·LTE, ITS, 철도통신, 전기 및 24시간 유지보수까지 최적의 시공 기술력을 선사합니다.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 my-16">
        
        {/* Detail Modules */}
        {BUSINESS_DATA.map((item, index) => (
          <div
            key={item.id}
            id={item.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Visual Image Banner Column */}
            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-[400px] bg-slate-900 overflow-hidden">
              <img
                src={item.bgImage}
                alt={item.title}
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-ug-navy text-amber-400 font-extrabold text-xs rounded-md shadow-md">
                  CORE DOMAIN 0{index + 1}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-extrabold mb-1">{item.title}</h3>
                <p className="text-xs text-amber-400 font-medium">{item.englishTitle}</p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div>
                <p className="text-sm md:text-base text-slate-700 font-medium leading-relaxed mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {item.fullDesc}
                </p>

                <h4 className="text-xs font-bold text-ug-navy uppercase tracking-wider mb-3">
                  주요 세부 서비스 및 시공 범위
                </h4>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {item.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start text-xs md:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 mr-2 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <span className="text-xs font-semibold text-slate-400 block mb-2">관련 기술 키워드</span>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <Tag key={t} label={t} variant="navy" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-amber-500" />
                  표준 공정 지침 및 ISO 9001/45001 적용
                </span>
                <Button
                  variant="primary"
                  onClick={onOpenContact}
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                  className="w-full sm:w-auto"
                >
                  본 사업 견적·기술 문의
                </Button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};
