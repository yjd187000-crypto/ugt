import React from 'react';
import { Link } from 'react-router-dom';
import { CERTIFICATES_DATA } from '../../data/companyData';
import { ShieldCheck, Award, FileCheck, ArrowRight, CheckCircle } from 'lucide-react';

export const TechQualitySafetySection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-telecom-black text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
              SAFETY & QUALITY MANAGEMENT · 기술·품질·안전
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              완벽한 시공은 <br className="hidden sm:inline" />
              <span className="text-amber-400">철저한 안전과 품질</span>에서 시작됩니다.
            </h2>
          </div>

          <Link
            to="/technology"
            className="inline-flex items-center text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors mt-4 md:mt-0 group"
          >
            기술·안전관리 체계 상세히 보기
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES_DATA.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-900/90 hover:bg-slate-900 rounded-sm p-6 border-l-2 border-l-amber-400 border-y border-r border-slate-800 hover:border-amber-400/50 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-slate-800 group-hover:bg-amber-400 text-amber-400 group-hover:text-slate-900 rounded-sm transition-colors">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-slate-800 text-slate-300 rounded-xs font-bold">
                    {cert.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-[11px] text-slate-400 block mb-3 font-mono">
                  발급기관: {cert.issuer}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-4 bg-slate-950/60 p-3 rounded-sm border border-slate-800">
                  {cert.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">인증 가이드:</span>
                  <span className="font-semibold text-slate-300">{cert.certNumberPlaceholder}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">유효기간:</span>
                  <span className="text-amber-400 font-medium">{cert.validPeriodPlaceholder}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Safety Stat Placeholder Warning Strip */}
        <div className="mt-12 p-4 bg-slate-900/80 rounded-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div className="flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>안전 관련 통계 및 세부 재해율: 산업안전보건공단 공식 공시자료 준비 중 (실제 수치 검증 후 반영)</span>
          </div>
          <Link to="/technology" className="text-amber-400 font-bold hover:underline shrink-0">
            기술인증 전체 확인 →
          </Link>
        </div>

      </div>
    </section>
  );
};
