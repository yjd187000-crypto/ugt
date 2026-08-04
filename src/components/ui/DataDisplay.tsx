import React, { useState } from 'react';
import { METRICS_DATA } from '../../data/companyData';
import { Info } from 'lucide-react';

export const DataDisplay: React.FC = () => {
  const [activeNote, setActiveNote] = useState<string | null>(null);

  return (
    <div className="w-full bg-ug-navy text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-800 shadow-xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b border-slate-700/60">
          <div>
            <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
              UG TELECOM · PERFORMANCE METRICS
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-1">
              수치로 증명하는 유지텔레컴의 기술력과 현장 역량
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-2 md:mt-0 flex items-center gap-1">
            <Info className="w-3.5 h-3.5 text-amber-400" />
            수치 항목을 클릭하시면 상세 근거 및 운영 가이드를 확인하실 수 있습니다.
          </p>
        </div>

        {/* 5 metrics grid: PC 5 columns, Tablet 3, Mobile 2 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {METRICS_DATA.map((item, idx) => {
            const isNoteOpen = activeNote === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveNote(isNoteOpen ? null : item.id)}
                className={`group relative bg-slate-900/90 hover:bg-slate-800 border-l-2 ${
                  idx === 0 ? 'border-amber-400' : 'border-slate-700 hover:border-amber-400'
                } border-y border-r border-slate-800 rounded-sm p-5 md:p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">{item.label}</span>
                    <Info className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-400 tracking-tight">
                    {item.value}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800">
                  <span className="text-xs font-semibold text-slate-300 block">{item.sublabel}</span>
                </div>

                {/* Footnote popup */}
                {isNoteOpen && item.note && (
                  <div className="absolute left-0 right-0 top-full mt-2 z-20 bg-slate-950 border border-amber-400/60 rounded-sm p-3 text-xs text-slate-200 shadow-2xl animate-fade-in">
                    <p className="font-bold text-amber-400 mb-1">[확인 및 가이드]</p>
                    <p>{item.note}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
