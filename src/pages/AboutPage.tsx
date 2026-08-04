import React from 'react';
import { COMPANY_INFO, HISTORY_DATA } from '../data/companyData';
import { Button } from '../components/ui/Button';
import { ShieldCheck, Award, Target, Users, MapPin, Phone, Mail, Calendar, CheckCircle2, Building2 } from 'lucide-react';

interface AboutPageProps {
  onOpenBrochure: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBrochure }) => {
  return (
    <div className="pt-20 md:pt-28 pb-20 bg-slate-50 text-slate-900">
      
      {/* Banner */}
      <section className="bg-ug-navy text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
            ABOUT UG TELECOM · 회사소개
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            대한민국을 연결하는 기술, <br />
            <span className="text-amber-400">㈜유지텔레컴</span>입니다.
          </h1>
          <p className="text-slate-300 max-w-2xl text-sm md:text-base leading-relaxed">
            2005년 설립 이래 20년간 대한민국 정보통신 및 전기 인프라의 주역으로서 국가망, 광통신, 5G/LTE, ITS, 철도통신 현장을 완벽 시공해 왔습니다.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 my-16">
        
        {/* CEO Message */}
        <section className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 bg-slate-900 rounded-xl p-8 text-white relative overflow-hidden">
            <div className="text-xs font-bold text-amber-400 uppercase mb-2">CEO MESSAGE</div>
            <h2 className="text-2xl font-bold mb-4">대표이사 인사말</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              "기술의 가치는 사람과 사람, 사람과 사회를 안전하게 연결할 때 완성됩니다. 유지텔레컴은 철저한 품질과 타협하지 않는 안전을 바탕으로 연결의 미래를 열어가겠습니다."
            </p>
            <div className="pt-4 border-t border-slate-800 text-right">
              <span className="text-xs text-slate-400 block">㈜유지텔레컴 대표이사</span>
              <span className="text-lg font-bold text-amber-400">정 우 창</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 text-slate-700 text-sm leading-relaxed">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              안녕하십니까. ㈜유지텔레컴 대표이사 정우창입니다.
            </h3>
            <p>
              저희 유지텔레컴은 2005년 7월 설립 이래 초고속 광통신망, 이동통신 5G·LTE 기지국, 도로 ITS 지능형 교통체계, 철도통신(LTE-R), 전기설비 인프라 분야에서 최상의 기술력과 시공 품질을 입증해 온 종합 정보통신 전문 기업입니다.
            </p>
            <p>
              급변하는 차세대 ICT 환경 속에서도 '안전 우선'과 '고객 신뢰'를 변함없는 경영 원칙으로 삼아 왔으며, 현장 하나하나를 국가 핵심 인프라라는 자부심으로 임하고 있습니다.
            </p>
            <p>
              앞으로도 최신 통신 기술 도입과 철저한 안전 보건 체계를 기반으로 대한민국을 더욱 가깝고 완벽하게 연결하는 1등 기술 파트너가 될 것을 약속드립니다.
            </p>
          </div>
        </section>

        {/* Vision & Mission & Core Values */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-ug-navy uppercase block mb-1">VISION & VALUES</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">비전 및 핵심가치</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-ug-navy text-white rounded-2xl p-8 shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs text-amber-400 font-bold uppercase block mb-2">VISION</span>
                <h3 className="text-xl font-bold mb-3">{COMPANY_INFO.vision}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  초연결 시대를 선도하는 기술력과 전국망 시공 인프라를 바탕으로 지속 가능한 미래 통신을 구축합니다.
                </p>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs text-amber-400 font-bold uppercase block mb-2">MISSION</span>
                <h3 className="text-xl font-bold mb-3">{COMPANY_INFO.mission}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  단 한 건의 안전사고 없이 완벽한 시공과 품질 검수를 통해 국가 망과 고객의 가치를 보호합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values 4 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {COMPANY_INFO.coreValues.map((v, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-amber-400/20 text-amber-800 flex items-center justify-center mb-3 font-bold">
                  0{i + 1}
                </div>
                <h4 className="font-bold text-slate-900 mb-1">{v.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Corporate History Timeline */}
        <section className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-sm">
          <div className="mb-8 pb-4 border-b border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-ug-navy uppercase block mb-1">HISTORY</span>
              <h2 className="text-2xl font-bold text-slate-900">2005년부터 현재까지 연혁</h2>
            </div>
            <Calendar className="w-6 h-6 text-amber-500" />
          </div>

          <div className="space-y-8 relative pl-6 border-l-2 border-ug-navy">
            {HISTORY_DATA.map((h, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-ug-navy" />
                <div className="text-lg font-bold text-ug-navy mb-2">{h.year}</div>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  {h.events.map((ev, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{ev}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Organization Chart */}
        <section className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-sm">
          <div className="mb-8 pb-4 border-b border-slate-200">
            <span className="text-xs font-bold text-ug-navy uppercase block mb-1">ORGANIZATION</span>
            <h2 className="text-2xl font-bold text-slate-900">조직 체계</h2>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center space-y-6">
            <div className="inline-block bg-ug-navy text-white px-6 py-3 rounded-xl font-bold text-base shadow-md">
              대표이사 (CEO)
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
              <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                <h4 className="font-bold text-ug-navy text-sm mb-1">이동통신사업부</h4>
                <p className="text-xs text-slate-500">5G/LTE 기지국, 인빌딩, 특화망</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                <h4 className="font-bold text-ug-navy text-sm mb-1">광통신·ITS사업부</h4>
                <p className="text-xs text-slate-500">FTTH, 고속도로 ITS, C-ITS</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                <h4 className="font-bold text-ug-navy text-sm mb-1">철도·전기사업부</h4>
                <p className="text-xs text-slate-500">LTE-R, 전력 수배전, UPS</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                <h4 className="font-bold text-amber-600 text-sm mb-1">안전품질실·경영지원</h4>
                <p className="text-xs text-slate-500">ISO, 안전보건, 기업부설연구소</p>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Overview Details Table */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-ug-navy" />
            회사 기본 정보
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
            <div className="p-3 bg-slate-50 rounded-lg flex justify-between">
              <span className="font-bold text-slate-600">회사명</span>
              <span className="text-slate-900 font-semibold">{COMPANY_INFO.name}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg flex justify-between">
              <span className="font-bold text-slate-600">영문명</span>
              <span className="text-slate-900">{COMPANY_INFO.englishName}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg flex justify-between">
              <span className="font-bold text-slate-600">대표이사</span>
              <span className="text-slate-900 font-semibold">{COMPANY_INFO.ceo}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg flex justify-between">
              <span className="font-bold text-slate-600">설립일</span>
              <span className="text-slate-900">{COMPANY_INFO.established}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg flex justify-between md:col-span-2">
              <span className="font-bold text-slate-600">본사 주소</span>
              <span className="text-slate-900">{COMPANY_INFO.address}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg flex justify-between">
              <span className="font-bold text-slate-600">대표전화</span>
              <a href={`tel:${COMPANY_INFO.phone}`} className="text-ug-navy font-bold hover:underline">
                {COMPANY_INFO.phone}
              </a>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg flex justify-between">
              <span className="font-bold text-slate-600">이메일</span>
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-ug-navy font-bold hover:underline">
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Button variant="primary" onClick={onOpenBrochure}>
              회사소개서 다운로드
            </Button>
          </div>
        </section>

      </div>
    </div>
  );
};
