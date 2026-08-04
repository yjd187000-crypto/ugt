import React from 'react';
import { PROCESS_STEPS } from '../../data/companyData';
import { CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-ug-navy uppercase tracking-wider block mb-2">
            EXECUTION PROCESS · 시공 수행 프로세스
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            초기 현장 조사부터 24시간 유지보수까지 <br />
            <span className="text-ug-navy underline decoration-amber-400 underline-offset-4">체계적인 5단계 공정</span>으로 수행합니다.
          </h2>
          <p className="text-sm md:text-base text-slate-600">
            20년 노하우가 집약된 기획, 설계, 시공, 전수 품질검수, 무장애 유지보수 프로세스를 준수합니다.
          </p>
        </div>

        {/* Horizontal Desktop Process Steps */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative">
          {/* Connector Line behind steps */}
          <div className="absolute top-1/2 left-10 right-10 h-1 bg-slate-200 -translate-y-6 z-0" />

          {PROCESS_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="relative z-10 bg-slate-50 hover:bg-white border-l-2 border-l-amber-400 border-y border-r border-slate-200 hover:border-ug-navy hover:shadow-lg rounded-sm p-6 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-sm bg-ug-navy group-hover:bg-amber-400 text-white group-hover:text-slate-900 font-extrabold text-base flex items-center justify-center mb-4 transition-colors shadow-xs">
                  {item.step}
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-ug-navy transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                <span>Step 0{index + 1} 완료 표준</span>
              </div>
            </div>
          ))}
        </div>

        {/* Vertical Mobile Timeline Steps */}
        <div className="lg:hidden space-y-6 relative pl-6 border-l-2 border-ug-navy">
          {PROCESS_STEPS.map((item) => (
            <div key={item.step} className="relative bg-slate-50 p-5 rounded-xl border border-slate-200">
              {/* Timeline Bullet */}
              <div className="absolute -left-[31px] top-5 w-4 h-4 rounded-full bg-amber-400 border-2 border-ug-navy" />

              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-ug-navy text-amber-400 font-extrabold text-xs rounded">
                  STEP {item.step}
                </span>
                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
