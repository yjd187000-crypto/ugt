import React from 'react';
import { Tag } from '../ui/Tag';
import { COMPANY_INFO } from '../../data/companyData';
import { ShieldCheck, Cpu, Zap, Activity } from 'lucide-react';

export const IdentitySection: React.FC = () => {
  const tags = ['Network', 'Optical Fiber', '5G·LTE', 'ITS', 'LTE-R', 'Electrical'];

  return (
    <section className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-md border border-slate-200">
              <Activity className="w-4 h-4 text-ug-navy" />
              <span className="text-xs font-bold text-ug-navy uppercase tracking-wider">
                CORPORATE IDENTITY · ㈜유지텔레컴
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-snug">
              보이지 않는 곳에서 <br />
              <span className="text-ug-navy underline decoration-amber-400 decoration-4 underline-offset-8">
                대한민국의 연결
              </span>
              을 완성합니다.
            </h2>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              {COMPANY_INFO.name}은 통신망과 전기 인프라의 설계, 구축, 운영, 유지보수를 일괄 수행하는 국가 정보통신 인프라 전문기업입니다.
            </p>

            <p className="text-sm text-slate-500 leading-relaxed">
              고속도로 ITS, 철도통신 LTE-R, 5G/LTE 기지국, 초고속 광케이블망 등 국가 산업 발전과 국민 생활의 기반이 되는 차세대 네트워킹 현장을 안정적으로 지켜왔습니다.
            </p>

            {/* Tags Grid */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                CORE TECHNOLOGY DOMAINS
              </span>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Tag key={tag} label={tag} variant="navy" className="text-sm py-1 px-3 font-semibold" />
                ))}
              </div>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-400/20 text-amber-900 rounded-lg shrink-0">
                  <ShieldCheck className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">책임 시공</h4>
                  <p className="text-xs text-slate-500">설계부터 유지보수까지 일괄 책임</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-ug-navy/10 text-ug-navy rounded-lg shrink-0">
                  <Zap className="w-5 h-5 text-ug-navy" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">신속 응급 복구</h4>
                  <p className="text-xs text-slate-500">24시간 비상 대기 대응 체계</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Graphic Column: Interactive SVG South Korea Map & Network Lines */}
          <div className="lg:col-span-6">
            <div className="relative bg-slate-900 rounded-sm p-6 md:p-8 shadow-2xl border-l-2 border-l-amber-400 border-y border-r border-slate-800 text-white overflow-hidden group">
              {/* Decorative Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold tracking-wider text-slate-300 uppercase">
                    NATIONWIDE TELECOM BACKBONE NETWORK
                  </span>
                </div>
                <span className="text-[11px] px-2 py-0.5 bg-amber-400/20 text-amber-400 font-semibold rounded">
                  LIVE CONNECTIVITY
                </span>
              </div>

              {/* Graphic SVG Canvas */}
              <div className="relative h-72 sm:h-80 w-full flex items-center justify-center">
                <svg viewBox="0 0 400 400" className="w-full h-full max-h-80" aria-label="대한민국 통신망 가상 그래픽">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0B1D3A" />
                      <stop offset="50%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#FFC800" />
                    </linearGradient>
                  </defs>

                  {/* Stylized Abstract Outline of Korea Peninsula */}
                  <path
                    d="M 180 50 Q 220 80 210 120 T 230 180 T 250 240 T 220 310 T 180 340 T 150 280 T 140 200 T 160 110 Z"
                    fill="none"
                    stroke="#1E293B"
                    strokeWidth="3"
                    strokeDasharray="4 4"
                  />

                  {/* Network Signal Flow Lines */}
                  <path d="M 180 90 L 190 140 L 230 190 L 210 260 L 170 310" stroke="url(#lineGradient)" strokeWidth="2.5" fill="none" className="animate-dash-flow" />
                  <path d="M 190 140 L 150 180 L 160 250 L 210 260" stroke="#FFC800" strokeWidth="1.5" fill="none" strokeDasharray="6 4" opacity="0.8" />
                  <path d="M 180 90 L 240 150 L 230 190" stroke="#3B82F6" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />

                  {/* Connection Nodes */}
                  {/* Seoul/Gyeonggi */}
                  <g transform="translate(180, 90)">
                    <circle r="8" fill="#FFC800" className="animate-signal-pulse" />
                    <circle r="4" fill="#0B1D3A" />
                    <text x="12" y="4" fill="#FFFFFF" fontSize="11" fontWeight="bold">수도권 본사/국사</text>
                  </g>

                  {/* Gangwon */}
                  <g transform="translate(240, 110)">
                    <circle r="5" fill="#3B82F6" />
                    <text x="10" y="4" fill="#94A3B8" fontSize="10">강원 거점</text>
                  </g>

                  {/* Daejeon/Chungcheong */}
                  <g transform="translate(190, 160)">
                    <circle r="6" fill="#FFC800" className="animate-signal-pulse" />
                    <circle r="3" fill="#0B1D3A" />
                    <text x="10" y="4" fill="#FFFFFF" fontSize="10" fontWeight="bold">충청 ITS 거점</text>
                  </g>

                  {/* Daegu/Gyeongbuk */}
                  <g transform="translate(230, 210)">
                    <circle r="5" fill="#3B82F6" />
                    <text x="10" y="4" fill="#94A3B8" fontSize="10">경상 5G/철도</text>
                  </g>

                  {/* Gwangju/Jeolla */}
                  <g transform="translate(160, 240)">
                    <circle r="5" fill="#3B82F6" />
                    <text x="-65" y="4" fill="#94A3B8" fontSize="10">전라 통신망</text>
                  </g>

                  {/* Busan/Gyeongnam */}
                  <g transform="translate(220, 280)">
                    <circle r="6" fill="#FFC800" className="animate-signal-pulse" />
                    <text x="10" y="4" fill="#FFFFFF" fontSize="10" fontWeight="bold">부산/남부 거점</text>
                  </g>
                </svg>
              </div>

              {/* Footer caption */}
              <div className="mt-2 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>전국 주요 도로·철도·통신국사 실시간 인프라 시공</span>
                <span className="text-amber-400 font-bold">20+ Years Excellence</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
