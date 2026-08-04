import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-20 md:pt-28 pb-20 bg-slate-50 text-slate-900">
      
      {/* Banner */}
      <section className="bg-ug-navy text-white py-12 md:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
            PRIVACY POLICY · 개인정보처리방침
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            ㈜유지텔레컴 개인정보처리방침
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-12 bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm space-y-8 text-xs md:text-sm text-slate-700 leading-relaxed">
        
        <div className="flex items-center gap-2 pb-4 border-b border-slate-200 font-bold text-slate-900">
          <ShieldCheck className="w-5 h-5 text-amber-500" />
          <span>시행일자: 2024년 01월 01일 (최신 개정)</span>
        </div>

        <p>
          주식회사 유지텔레컴(이하 '회사'라 함)은 「개인정보 보호법」 등 관련 법령을 준수하며, 이용자의 개인정보 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
        </p>

        <div className="space-y-3">
          <h3 className="text-base font-bold text-slate-900">제1조 (개인정보의 수집 및 이용 목적)</h3>
          <p>회사는 다음의 목적을 위하여 최소한의 개인정보를 수집 및 처리합니다.</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>프로젝트 견적 문의 및 사업 상담 응대</li>
            <li>기술 자료, 회사소개서 제공 및 확인 연락</li>
            <li>채용 지원자 이력서 검토 및 채용 절차 진행</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-bold text-slate-900">제2조 (수집하는 개인정보 항목)</h3>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li><strong>프로젝트 문의 시:</strong> 회사명(기관명), 담당자 성함, 이메일 주소, 전화번호, 문의 내용 및 첨부파일</li>
            <li><strong>채용 지원 시:</strong> 성명, 연락처, 이메일, 경력 및 자격사항</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-bold text-slate-900">제3조 (개인정보의 보유 및 이용 기간)</h3>
          <p>
            원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계 법령의 규정에 의하여 보존할 필요가 있는 경우 지정된 기간 동안 보관합니다.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>상담 및 문의 기록: 문의 처리 완료 후 3년간 보관</li>
            <li>채용 관련 서류: 채용 진행 완료 후 180일간 보관 후 파기</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-base font-bold text-slate-900">제4조 (개인정보 보호책임자)</h3>
          <p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
          
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1">
            <p><strong>• 개인정보 보호책임자:</strong> 경영지원팀 팀장</p>
            <p><strong>• 대표전화:</strong> {COMPANY_INFO.phone}</p>
            <p><strong>• 이메일:</strong> {COMPANY_INFO.email}</p>
            <p><strong>• 주소:</strong> {COMPANY_INFO.address}</p>
          </div>
        </div>

      </div>
    </div>
  );
};
