import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../../data/companyData';
import { ProjectItem } from '../../types';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectDetailModal } from '../ui/ProjectDetailModal';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface FeaturedProjectsProps {
  onContactRequest: () => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsProps> = ({ onContactRequest }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const featured = PROJECTS_DATA.slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-ug-navy uppercase tracking-wider block mb-2">
              MAJOR TRACK RECORD · 주요 수행 실적
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              대한민국의 중요한 현장에서 <br className="hidden sm:inline" />
              <span className="text-ug-navy underline decoration-amber-400 underline-offset-4">기술력</span>을 증명했습니다.
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end mt-4 md:mt-0 space-y-2">
            <Link
              to="/projects"
              className="inline-flex items-center text-sm font-bold text-ug-navy hover:text-amber-600 transition-colors group"
            >
              전체 주요실적 갤러리 보기
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
            <span className="text-[11px] text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
              보안지침 준수 (발주처 무단 로고 미표시)
            </span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Detail Modal */}
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onContactRequest={onContactRequest}
        />

      </div>
    </section>
  );
};
