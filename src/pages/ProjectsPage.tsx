import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/companyData';
import { ProjectItem } from '../types';
import { Chip } from '../components/ui/Tag';
import { ProjectCard } from '../components/ui/ProjectCard';
import { ProjectDetailModal } from '../components/ui/ProjectDetailModal';
import { Input } from '../components/ui/Input';
import { Search, ShieldAlert } from 'lucide-react';

interface ProjectsPageProps {
  onOpenContact: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [selectedYear, setSelectedYear] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['전체', '이동통신', '광통신', 'ITS', '철도', '공공·국방', '전기'];
  const years = ['전체', '2024년', '2023년', '2022년'];

  const filteredProjects = PROJECTS_DATA.filter((item) => {
    const categoryMatch = selectedCategory === '전체' || item.category === selectedCategory;
    const yearMatch = selectedYear === '전체' || item.year === selectedYear;
    const searchMatch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.scope.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.region.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && yearMatch && searchMatch;
  });

  return (
    <div className="pt-20 md:pt-28 pb-20 bg-slate-50 text-slate-900">
      
      {/* Banner */}
      <section className="bg-ug-navy text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
            TRACK RECORD · 주요 실적
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            대한민국 통신 인프라 <br />
            <span className="text-amber-400">시공 실적 포트폴리오</span>
          </h1>
          <p className="text-slate-300 max-w-2xl text-sm md:text-base leading-relaxed">
            고속도로 ITS, 철도통신 LTE-R, 5G 기지국, 초고속 광케이블망 등 20년간 구축해 온 다양한 성공적 프로젝트를 확인하세요.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12 space-y-8">
        
        {/* Disclosure Notice Banner */}
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-start gap-3 text-xs md:text-sm text-amber-900">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">공개 가능 범위 안내 (Security & Disclosure Policy)</p>
            <p className="text-amber-800 text-xs mt-0.5">
              본 주요 실적 리스트는 보안 및 영업 비밀 규정에 따른 대외 공개 가능 범위 내에서 게시되었습니다. 고객사 미승인 로고, 공개되지 않은 정밀 계약 금액 및 국사 내부 도면은 표시되지 않습니다.
            </p>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          {/* Search Input */}
          <div className="relative max-w-lg">
            <Input
              label="실적 프로젝트 검색"
              placeholder="프로젝트명, 수행범위, 지역 검색 (예: ITS, 수인분당선, 5G)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 bottom-3.5" />
          </div>

          {/* Sector Category Chips */}
          <div>
            <span className="text-xs font-bold text-slate-500 block mb-2">분야별 선택</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Chip
                  key={cat}
                  label={cat}
                  selected={selectedCategory === cat}
                  onClick={() => setSelectedCategory(cat)}
                />
              ))}
            </div>
          </div>

          {/* Year Chips */}
          <div>
            <span className="text-xs font-bold text-slate-500 block mb-2">연도별 선택</span>
            <div className="flex flex-wrap gap-2">
              {years.map((y) => (
                <Chip
                  key={y}
                  label={y}
                  selected={selectedYear === y}
                  onClick={() => setSelectedYear(y)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
          <span>총 <strong className="text-ug-navy font-bold">{filteredProjects.length}</strong>건의 주요 실적이 검색되었습니다.</span>
          {(selectedCategory !== '전체' || selectedYear !== '전체' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('전체');
                setSelectedYear('전체');
                setSearchQuery('');
              }}
              className="text-ug-navy font-bold underline hover:text-amber-600"
            >
              필터 초기화
            </button>
          )}
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center text-slate-500 text-sm">
            조건에 해당하는 프로젝트 실적이 없습니다. 다른 검색어나 필터를 선택해 주세요.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                onSelect={(selected) => setSelectedProject(selected)}
              />
            ))}
          </div>
        )}

      </div>

      {/* Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactRequest={onOpenContact}
      />
    </div>
  );
};
