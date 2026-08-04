import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BUSINESS_DATA, PROJECTS_DATA, CERTIFICATES_DATA, JOB_OPENINGS } from '../../data/companyData';
import { X, Search, ArrowRight, Tag as TagIcon, Briefcase } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const cleanQuery = query.trim().toLowerCase();

  const matchedBusiness = cleanQuery
    ? BUSINESS_DATA.filter(
        b => b.title.toLowerCase().includes(cleanQuery) || b.shortDesc.toLowerCase().includes(cleanQuery) || b.tags.some(t => t.toLowerCase().includes(cleanQuery))
      )
    : [];

  const matchedProjects = cleanQuery
    ? PROJECTS_DATA.filter(
        p => p.title.toLowerCase().includes(cleanQuery) || p.category.toLowerCase().includes(cleanQuery) || p.scope.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchedCerts = cleanQuery
    ? CERTIFICATES_DATA.filter(
        c => c.title.toLowerCase().includes(cleanQuery) || c.desc.toLowerCase().includes(cleanQuery)
      )
    : [];

  const matchedJobs = cleanQuery
    ? JOB_OPENINGS.filter(
        j => j.title.toLowerCase().includes(cleanQuery) || j.department.toLowerCase().includes(cleanQuery)
      )
    : [];

  const handleSelect = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 relative max-h-[80vh] flex flex-col">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2 text-ug-navy font-bold text-base md:text-lg">
            <Search className="w-5 h-5 text-amber-500" />
            <span>유지텔레컴 검색</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input */}
        <div className="relative my-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="검색어를 입력하세요 (예: 5G, 광케이블, ITS, 철도, ISO, 채용)"
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-ug-navy focus:ring-2 focus:ring-amber-400"
            autoFocus
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
        </div>

        {/* Search Results */}
        <div className="overflow-y-auto flex-1 space-y-6 pr-1">
          {!cleanQuery ? (
            <div className="py-8 text-center text-slate-400 text-xs">
              <p className="mb-2">추천 검색어:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['5G 기지국', '광케이블', 'ITS', 'LTE-R', '품질인증', '채용공고'].map((keyword) => (
                  <button
                    key={keyword}
                    onClick={() => setQuery(keyword)}
                    className="px-3 py-1 bg-slate-100 hover:bg-amber-100 hover:text-slate-900 text-slate-600 rounded-full text-xs transition-colors"
                  >
                    #{keyword}
                  </button>
                ))}
              </div>
            </div>
          ) : matchedBusiness.length === 0 && matchedProjects.length === 0 && matchedCerts.length === 0 && matchedJobs.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-xs">
              '<span className="font-semibold text-slate-900">{query}</span>'에 대한 검색 결과가 없습니다.
            </div>
          ) : (
            <div className="space-y-6">
              {/* Business Results */}
              {matchedBusiness.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <TagIcon className="w-3.5 h-3.5 text-amber-500" /> 사업영역 ({matchedBusiness.length})
                  </h4>
                  <div className="space-y-2">
                    {matchedBusiness.map(b => (
                      <div
                        key={b.id}
                        onClick={() => handleSelect('/business')}
                        className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 cursor-pointer transition-colors flex items-center justify-between"
                      >
                        <div>
                          <p className="text-sm font-bold text-slate-900">{b.title}</p>
                          <p className="text-xs text-slate-500 line-clamp-1">{b.shortDesc}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Results */}
              {matchedProjects.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Search className="w-3.5 h-3.5 text-amber-500" /> 주요 실적 ({matchedProjects.length})
                  </h4>
                  <div className="space-y-2">
                    {matchedProjects.map(p => (
                      <div
                        key={p.id}
                        onClick={() => handleSelect('/projects')}
                        className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 cursor-pointer transition-colors flex items-center justify-between"
                      >
                        <div>
                          <p className="text-sm font-bold text-slate-900">{p.title}</p>
                          <p className="text-xs text-slate-500">{p.category} | {p.period}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certs Results */}
              {matchedCerts.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    인증 및 면허 ({matchedCerts.length})
                  </h4>
                  <div className="space-y-2">
                    {matchedCerts.map(c => (
                      <div
                        key={c.id}
                        onClick={() => handleSelect('/technology')}
                        className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 cursor-pointer transition-colors flex items-center justify-between"
                      >
                        <div>
                          <p className="text-sm font-bold text-slate-900">{c.title}</p>
                          <p className="text-xs text-slate-500">{c.issuer}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Jobs Results */}
              {matchedJobs.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-amber-500" /> 채용정보 ({matchedJobs.length})
                  </h4>
                  <div className="space-y-2">
                    {matchedJobs.map(j => (
                      <div
                        key={j.id}
                        onClick={() => handleSelect('/careers')}
                        className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 cursor-pointer transition-colors flex items-center justify-between"
                      >
                        <div>
                          <p className="text-sm font-bold text-slate-900">{j.title}</p>
                          <p className="text-xs text-slate-500">{j.department} | {j.experience}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
