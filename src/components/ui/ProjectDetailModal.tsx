import React from 'react';
import { ProjectItem } from '../../types';
import { Tag } from './Tag';
import { Button } from './Button';
import { X, Calendar, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onContactRequest?: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onContactRequest
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        {/* Header with image */}
        <div className="relative h-56 md:h-64 w-full bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-slate-900/60 hover:bg-slate-900 text-white rounded-full transition-colors focus:outline-none"
            aria-label="모달 닫기"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex gap-2 mb-2">
              <Tag label={project.category} variant="yellow" />
              <Tag label={project.year} variant="dark" />
            </div>
            <h2 className="text-lg md:text-2xl font-bold text-white leading-snug">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs md:text-sm">
            <div className="flex items-center text-slate-700">
              <Calendar className="w-4 h-4 text-ug-navy mr-2 shrink-0" />
              <div>
                <span className="font-semibold block text-slate-900">수행기간</span>
                <span>{project.period}</span>
              </div>
            </div>
            <div className="flex items-center text-slate-700">
              <MapPin className="w-4 h-4 text-amber-500 mr-2 shrink-0" />
              <div>
                <span className="font-semibold block text-slate-900">수행 지역</span>
                <span>{project.region}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-2">수행 개요</h3>
            <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-2">주요 기술 성과 & 핵심 스펙</h3>
            <ul className="space-y-2">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start text-xs md:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 mr-2 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.isDemoLocation && (
            <div className="flex items-start gap-2 text-xs text-slate-500 bg-amber-50 border border-amber-200 p-3 rounded-lg">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>안내사항:</strong> 보안 규정 및 고객사 계약상 세부 도면, 지하시설물 좌표 및 미공개 금액은 표시되지 않으며, 위치 정보는 예시 지역 거점입니다.
              </span>
            </div>
          )}

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200">
            <Button variant="outlined" onClick={onClose} fullWidth className="sm:w-auto">
              닫기
            </Button>
            {onContactRequest && (
              <Button
                variant="primary"
                onClick={() => {
                  onClose();
                  onContactRequest();
                }}
                fullWidth
                className="sm:w-auto"
              >
                유사 프로젝트 문의하기
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
