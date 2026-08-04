import React, { useState } from 'react';
import { JOB_OPENINGS } from '../data/companyData';
import { JobOpening } from '../types';
import { Button } from '../components/ui/Button';
import { Tag } from '../components/ui/Tag';
import { Briefcase, Users, Award, Heart, CheckCircle2, ChevronRight, UserCheck, MessageCircle, AlertCircle } from 'lucide-react';

export const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  const steps = [
    { num: '01', title: '서류전형', desc: '지원서 작성 및 자격 사항 검토' },
    { num: '02', title: '직무평가', desc: '정보통신/전기 실무 역량 평가' },
    { num: '03', title: '1차 실무면접', desc: '부서장 및 직무 종합 면접' },
    { num: '04', title: '2차 임원면접', desc: '인성, 가치관 및 조직 적합도' },
    { num: '05', title: '최종합격', desc: '처우 협의 및 채용 검진' }
  ];

  const benefits = [
    { title: '수당 및 포상', desc: '자격증 수당 지원, 우수 현장 포상금, 성과급 지급' },
    { title: '건강 및 검진', desc: '종합 종합 건강검진 지원, 상해보험 가입' },
    { title: '자기계발 지원', desc: '정보통신/전기/안전 자격증 취득 교육비 지원' },
    { title: '경조사 및 휴가', desc: '경조금 및 경조휴가, 연차 자유 사용 보장' }
  ];

  return (
    <div className="pt-20 md:pt-28 pb-20 bg-slate-50 text-slate-900">
      
      {/* Banner */}
      <section className="bg-ug-navy text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
            CAREERS AT UG TELECOM · 인재채용
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            대한민국의 연결을 완성할 <br />
            <span className="text-amber-400">최고의 기술인</span>을 모십니다.
          </h1>
          <p className="text-slate-300 max-w-2xl text-sm md:text-base leading-relaxed">
            안전과 품질을 최우선으로 선도적인 정보통신 인프라를 지켜나갈 인재를 기다립니다.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 my-16">
        
        {/* Talent Profile (인재상) */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-ug-navy uppercase block mb-1">TALENT PROFILE</span>
            <h2 className="text-2xl font-bold text-slate-900">유지텔레컴 인재상</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-12 h-12 bg-amber-400/20 text-amber-900 rounded-xl flex items-center justify-center mx-auto mb-4 font-bold">
                <Award className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">전문성 (Expertise)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                정보통신 및 전기 공학의 끊임없는 학습을 통해 완벽한 기술력을 발휘하는 전문인
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-12 h-12 bg-ug-navy/10 text-ug-navy rounded-xl flex items-center justify-center mx-auto mb-4 font-bold">
                <UserCheck className="w-6 h-6 text-ug-navy" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">신뢰 (Trust)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                안전 지침과 공기 준수, 정직함으로 동료 및 고객사와의 약속을 지키는 책임감
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-12 h-12 bg-amber-400/20 text-amber-900 rounded-xl flex items-center justify-center mx-auto mb-4 font-bold">
                <Briefcase className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">도전 (Challenge)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                5G/6G 및 C-ITS 등 차세대 인프라 혁신 기술에 주도적으로 도전하는 열정
              </p>
            </div>
          </div>
        </section>

        {/* 5-Step Hiring Process */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <div className="mb-8 pb-4 border-b border-slate-200">
            <span className="text-xs font-bold text-ug-navy uppercase block mb-1">HIRING PROCEDURE</span>
            <h2 className="text-2xl font-bold text-slate-900">채용 절차 (5단계)</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {steps.map((step, idx) => (
              <div key={step.num} className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-center relative">
                <span className="text-xs font-extrabold text-amber-600 block mb-1">STEP {step.num}</span>
                <h4 className="font-bold text-slate-900 text-sm mb-1">{step.title}</h4>
                <p className="text-[11px] text-slate-500">{step.desc}</p>
                {idx < steps.length - 1 && (
                  <ChevronRight className="hidden sm:block w-4 h-4 text-slate-300 absolute -right-2 top-1/2 -translate-y-1/2 z-10" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Employee Interview Placeholder Cards */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-ug-navy uppercase block mb-1">PEOPLE & CULTURE</span>
              <h2 className="text-2xl font-bold text-slate-900">직원 인터뷰</h2>
            </div>
            <span className="text-xs text-slate-400 flex items-center gap-1 mt-1 md:mt-0">
              <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
              본 인터뷰 카드는 신규 채용 입사자 안내용 플레이스홀더입니다.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-ug-navy text-amber-400 font-bold rounded-full flex items-center justify-center text-sm">
                  UG
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">이동통신 시공 엔지니어 [교체용 예시]</h4>
                  <p className="text-xs text-slate-500">이동통신사업부 | 입사 4년차 인터뷰</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed bg-white p-3 rounded border border-slate-200">
                "5G 기지국 및 특화망 현장에서 시공 준공을 마쳤을 때의 성취감이 큽니다. 안전 교육과 자격증 지원 제도가 큰 도움이 되었습니다."
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-900 text-white font-bold rounded-full flex items-center justify-center text-sm">
                  UG
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">광통신·ITS 관리자 [교체용 예시]</h4>
                  <p className="text-xs text-slate-500">인프라사업부 | 입사 7년차 인터뷰</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed bg-white p-3 rounded border border-slate-200">
                "고속도로 ITS 지능형 교통 망을 내 손으로 완성한다는 보람이 있습니다. 팀원들과 서로 존중하며 성장하는 분위기입니다."
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <div className="mb-6 pb-4 border-b border-slate-200">
            <span className="text-xs font-bold text-ug-navy uppercase block mb-1">BENEFITS</span>
            <h2 className="text-2xl font-bold text-slate-900">복리후생 제도</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <Heart className="w-5 h-5 text-amber-500 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm mb-1">{b.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Job Openings List */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="pb-4 border-b border-slate-200">
            <span className="text-xs font-bold text-ug-navy uppercase block mb-1">OPEN POSITIONS</span>
            <h2 className="text-2xl font-bold text-slate-900">현재 채용 중인 공고</h2>
          </div>

          <div className="space-y-4">
            {JOB_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="p-6 bg-slate-50 hover:bg-slate-100/80 rounded-xl border border-slate-200 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Tag label={job.department} variant="navy" />
                    <Tag label={job.type} variant="yellow" />
                    <span className="text-xs text-slate-500">{job.experience} | {job.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{job.title}</h3>
                  <p className="text-xs text-slate-600 line-clamp-1">
                    주요업무: {job.tasks.join(', ')}
                  </p>
                </div>

                <Button
                  variant="primary"
                  to="/contact"
                  className="shrink-0 text-xs py-2 px-4"
                >
                  채용 지원 문의
                </Button>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
