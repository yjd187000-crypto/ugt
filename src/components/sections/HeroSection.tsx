import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, FileText, ChevronDown, Radio } from 'lucide-react';

interface HeroSectionProps {
  onOpenBrochure: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBrochure }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden pt-20 pb-16">
      {/* Background Image with Dark Telecom Black Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=2000&q=80"
          alt="통신 인프라 현장 및 안테나 타워"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-1000"
          style={{ animationDuration: '8s' }}
        />
        {/* Gradient overlays: Telecom Black tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent" />
      </div>

      {/* Decorative Network Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-15 bg-[radial-gradient(#FFC800_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-6 md:space-y-8 animate-fade-in">
          
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-400/30 backdrop-blur-md">
            <Radio className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="text-xs md:text-sm font-semibold tracking-wider text-amber-400">
              UG TELECOM · NETWORK INFRASTRUCTURE
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.2]">
            대한민국을 연결하는 기술, <br />
            <span className="text-amber-400">그 현장에 유지텔레컴</span>이 있습니다.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
            광통신망, 5G·LTE, ITS, 철도통신, 전기설비의 설계부터 시공·운영·유지보수까지 ㈜유지텔레컴이 완벽하게 책임집니다.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
            <Button
              variant="primary"
              to="/business"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
              className="py-3.5 px-6 text-base font-bold shadow-lg shadow-ug-navy/50"
            >
              사업영역 보기
            </Button>

            <Button
              variant="inverted"
              onClick={onOpenBrochure}
              icon={<FileText className="w-5 h-5 text-ug-navy" />}
              className="py-3.5 px-6 text-base font-bold"
            >
              회사소개서
            </Button>

            <Button
              variant="outlined"
              to="/contact"
              className="py-3.5 px-6 text-base font-semibold border-white/30 text-white hover:bg-white/10"
            >
              프로젝트 문의
            </Button>
          </div>

          {/* Feature Badge Strip */}
          <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-xs md:text-sm text-slate-300">
            <div>
              <span className="text-amber-400 font-bold block">ISO 9001/14001/45001</span>
              <span>품질·안전 인증 보유</span>
            </div>
            <div>
              <span className="text-amber-400 font-bold block">정보통신·전기 면허</span>
              <span>정식 등록 통합 시공사</span>
            </div>
            <div>
              <span className="text-amber-400 font-bold block">24/7 긴급복구</span>
              <span>전국망 대응 프로세스</span>
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center text-slate-400 text-xs gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <span>스크롤하여 더 알아보기</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-amber-400" />
      </div>
    </section>
  );
};
