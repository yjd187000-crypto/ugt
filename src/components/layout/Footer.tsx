import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../../data/companyData';
import { Radio, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-telecom-black text-white pt-16 pb-24 lg:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-sm bg-ug-navy flex items-center justify-center text-white font-bold text-lg">
                UG
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg text-white tracking-tight">㈜유지텔레컴</span>
                <span className="text-[10px] tracking-widest text-amber-400 font-medium uppercase">{COMPANY_INFO.englishName}</span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-md">
              {COMPANY_INFO.sloganKo}
              <br />
              광통신망, 5G·LTE, ITS, 철도통신, 전기설비의 설계부터 시공·운영·유지보수까지 완벽 시공을 약속드립니다.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>본사: {COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                  대표전화: {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  이메일: {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">
              회사 및 사업
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">회사소개</Link>
              </li>
              <li>
                <Link to="/business" className="hover:text-amber-400 transition-colors">사업영역</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-amber-400 transition-colors">주요실적</Link>
              </li>
              <li>
                <Link to="/technology" className="hover:text-amber-400 transition-colors">기술·품질·안전</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-amber-400 transition-colors">인재채용</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer & Legal */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">
              고객지원 & 정보
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">프로젝트 문의</Link>
              </li>
              <li>
                <Link to="/privacy" className="font-semibold text-white hover:text-amber-400 transition-colors">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  24시간 비상상황실 <ArrowUpRight className="w-3 h-3 text-amber-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Registration Summary */}
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-2">
            <h5 className="font-bold text-slate-200">기업 정보</h5>
            <p>상호: {COMPANY_INFO.name}</p>
            <p>영문: {COMPANY_INFO.englishName}</p>
            <p>대표이사: {COMPANY_INFO.ceo}</p>
            <p>설립일: {COMPANY_INFO.established}</p>
            <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-500">
              정보통신공사업 / 전기공사업 정식등록 법인
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2005-{new Date().getFullYear()} {COMPANY_INFO.englishName} All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-slate-300 underline underline-offset-4">
              개인정보처리방침
            </Link>
            <span>|</span>
            <Link to="/contact" className="hover:text-slate-300">
              고객문의
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
