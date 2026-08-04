import React from 'react';
import { ProjectItem } from '../../types';
import { Tag } from './Tag';
import { Button } from './Button';
import { Calendar, MapPin, ArrowRight, ShieldAlert } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="group bg-white rounded-sm border border-gray-200 hover:border-ug-navy overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Card Image */}
        <div className="relative h-48 md:h-52 w-full overflow-hidden bg-slate-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80" />
          
          <div className="absolute top-3 left-3 flex gap-2">
            <Tag label={project.category} variant="yellow" />
            <Tag label={project.year} variant="dark" />
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex items-center text-xs text-white/90">
            <MapPin className="w-3.5 h-3.5 text-amber-400 mr-1 shrink-0" />
            <span className="truncate">{project.region}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-base font-bold text-slate-900 group-hover:text-ug-navy transition-colors line-clamp-2 mb-2 leading-snug">
            {project.title}
          </h3>

          <div className="flex items-center text-xs text-slate-500 mb-3">
            <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
            <span>수행기간: {project.period}</span>
          </div>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed bg-slate-50 p-2.5 rounded-sm border border-slate-100 mb-3">
            <span className="font-semibold text-slate-700">수행범위:</span> {project.scope}
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-5 pb-5 pt-0 flex items-center justify-between border-t border-slate-100 pt-3">
        {project.client ? (
          <span className="text-[11px] text-slate-500 font-medium truncate max-w-[150px]">
            {project.client}
          </span>
        ) : (
          <span className="text-[11px] text-slate-400 flex items-center gap-1">
            <ShieldAlert className="w-3 h-3 text-amber-500" /> 보안·공공 인프라
          </span>
        )}
        <Button
          variant="outlined"
          onClick={() => onSelect(project)}
          icon={<ArrowRight className="w-3.5 h-3.5" />}
          iconPosition="right"
          className="py-1.5 px-3 text-xs"
        >
          상세보기
        </Button>
      </div>
    </div>
  );
};
