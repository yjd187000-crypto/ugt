import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_DATA } from '../../data/companyData';
import { Tag } from '../ui/Tag';
import { Radio, Zap, Server, Cpu, Train, ShieldCheck, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Radio,
  Zap,
  Server,
  Cpu,
  Train,
  ShieldCheck
};

export const BusinessSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-ug-navy uppercase tracking-wider block mb-2">
              BUSINESS CORE DOMAINS · ㈜유지텔레컴
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              연결에 필요한 모든 기술을 <br className="hidden sm:inline" />
              <span className="text-ug-navy">하나의 전문조직</span>으로 제공합니다.
            </h2>
          </div>
          <Link
            to="/business"
            className="inline-flex items-center text-sm font-bold text-ug-navy hover:text-amber-600 transition-colors mt-4 md:mt-0 group"
          >
            전체 사업영역 자세히 보기
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {BUSINESS_DATA.map((item) => {
            const IconComponent = iconMap[item.iconName] || Radio;

            return (
              <div
                key={item.id}
                className="group relative bg-white hover:bg-ug-navy rounded-sm p-6 md:p-8 border-l-4 border-l-transparent hover:border-l-amber-400 border-y border-r border-slate-200 hover:border-ug-navy shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-slate-900 hover:text-white"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-amber-400 text-ug-navy group-hover:text-slate-900 flex items-center justify-center transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 group-hover:text-amber-400 uppercase tracking-widest">
                      0{BUSINESS_DATA.indexOf(item) + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-1 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-medium text-slate-400 group-hover:text-slate-300 block mb-4">
                    {item.englishTitle}
                  </span>

                  <p className="text-sm text-slate-600 group-hover:text-slate-200 leading-relaxed mb-6">
                    {item.shortDesc}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2 mb-6">
                    {item.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start text-xs text-slate-600 group-hover:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2 mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Tag & Arrow Link */}
                <div className="pt-4 border-t border-slate-100 group-hover:border-slate-800 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 2).map((t) => (
                      <Tag key={t} label={t} variant="gray" className="group-hover:bg-slate-800 group-hover:text-amber-400 group-hover:border-slate-700" />
                    ))}
                  </div>
                  
                  <Link
                    to="/business"
                    className="p-2 rounded-full text-slate-400 group-hover:text-amber-400 group-hover:bg-slate-800 transition-colors"
                    aria-label={`${item.title} 상세보기`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
