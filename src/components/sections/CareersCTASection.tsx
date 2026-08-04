import React from 'react';
import { Button } from '../ui/Button';
import { Tag } from '../ui/Tag';
import { Users, ArrowRight, Briefcase } from 'lucide-react';

export const CareersCTASection: React.FC = () => {
  const roles = [
    '이동통신 기술',
    '광케이블 기술',
    'ITS·철도통신',
    '전기공사',
    '안전관리',
    '사업관리',
    '경영지원'
  ];

  return (
    <section className="py-20 md:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-sm p-8 md:p-12 border-l-4 border-l-amber-400 border-y border-r border-slate-200 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ug-navy/10 text-ug-navy rounded-md">
              <Users className="w-4 h-4 text-ug-navy" />
              <span className="text-xs font-bold uppercase tracking-wider">CAREERS AT UG TELECOM</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
              대한민국의 연결을 함께 완성할 <br className="hidden sm:inline" />
              <span className="text-ug-navy">기술인</span>을 기다립니다.
            </h2>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              정보통신 및 전기 인프라 최고 전문가 그룹과 함께 성장할 열정적이고 신뢰할 수 있는 인재를 상시 모십니다.
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-400 block mb-2">모집 및 직무 분야</span>
              <div className="flex flex-wrap gap-2">
                {roles.map((r) => (
                  <Tag key={r} label={r} variant="navy" className="text-xs py-1" />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <Button
              variant="primary"
              to="/careers"
              icon={<Briefcase className="w-4 h-4" />}
            >
              채용공고 보기
            </Button>
            <Button
              variant="outlined"
              to="/careers"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              직무 소개
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
