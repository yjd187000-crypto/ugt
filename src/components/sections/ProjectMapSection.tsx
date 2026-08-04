import React, { useState } from 'react';
import { PROJECTS_DATA } from '../../data/companyData';
import { Chip } from '../ui/Tag';
import { MapPin, Info, ArrowUpRight, ShieldAlert } from 'lucide-react';

export const ProjectMapSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const categories = ['전체', '이동통신', '광통신', 'ITS', '철도', '공공·국방', '전기'];

  const filteredProjects = selectedCategory === '전체'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  // Map nodes representing major regional hubs in Korea
  const mapNodes = [
    { id: 'n1', name: '수도권 (서울/용인/경기)', x: 42, y: 24, cat: ['이동통신', '광통신', '전기'], projectCount: 'SKT 5G, FTTH, 본사' },
    { id: 'n2', name: '충청/서부내륙 (천안/아산/대전)', x: 38, y: 44, cat: ['ITS', '전기'], projectCount: '서부내륙 고속도로 ITS' },
    { id: 'n3', name: '수원/성남 (수인분당선)', x: 44, y: 30, cat: ['철도'], projectCount: '수인분당선 LTE-R' },
    { id: 'n4', name: '강원/공공 (춘천/원주)', x: 62, y: 22, cat: ['공공·국방'], projectCount: '공공·국방 보안 망' },
    { id: 'n5', name: '대구/경북 스마트시티', x: 68, y: 55, cat: ['ITS'], projectCount: '방범/교통 CCTV 통신망' },
    { id: 'n6', name: '광주/전남 스마트 팩토리', x: 32, y: 68, cat: ['이동통신'], projectCount: '이음5G 스마트공장' },
    { id: 'n7', name: '부산/경남 남부 네트워크', x: 74, y: 72, cat: ['광통신', '전기'], projectCount: '광전송 및 정류기 시공' }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
              NATIONWIDE PROJECT MAP · 전국 시공 네트워크
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              전국 어디서나, <br className="hidden sm:inline" />
              <span className="text-amber-400">책임시공 현장</span>이 펼쳐집니다.
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-2 md:mt-0 flex items-center gap-1">
            <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            거점을 클릭하거나 마우스를 올려 해당 지역 프로젝트를 확인하세요.
          </p>
        </div>

        {/* Chips Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              selected={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
            />
          ))}
        </div>

        {/* Grid: Left Interactive SVG Map, Right Project List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Map Box */}
          <div className="lg:col-span-7 bg-slate-950 rounded-sm p-6 border-l-2 border-l-amber-400 border-y border-r border-slate-800 shadow-2xl relative min-h-[420px] flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-2 border-b border-slate-800">
              <span className="font-semibold text-slate-300">대한민국 사업 거점 & 프로젝트 연계도</span>
              <span className="px-2 py-0.5 bg-amber-400/20 text-amber-400 rounded text-[10px] font-bold">
                Signal Yellow : 선택 거점
              </span>
            </div>

            {/* Interactive SVG South Korea Map Container */}
            <div className="relative w-full h-80 sm:h-96 my-2">
              <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                {/* Simplified Korea Peninsula Background Shape */}
                <path
                  d="M 35,10 Q 55,15 50,30 T 65,45 T 80,60 T 70,80 T 55,95 T 35,80 T 20,60 T 30,35 Z"
                  fill="#0B1D3A"
                  stroke="#1E293B"
                  strokeWidth="1.2"
                />

                {/* Connecting Fiber Lines */}
                <path d="M 42,24 L 38,44 L 68,55 M 42,24 L 62,22 M 38,44 L 32,68 M 68,55 L 74,72" stroke="#FFC800" strokeWidth="0.8" strokeDasharray="2 1.5" opacity="0.6" />

                {/* Nodes on map */}
                {mapNodes.map((node) => {
                  const isMatch = selectedCategory === '전체' || node.cat.includes(selectedCategory);
                  const isHovered = hoveredLocation === node.name;

                  return (
                    <g
                      key={node.id}
                      transform={`translate(${node.x}, ${node.y})`}
                      className="cursor-pointer transition-transform duration-200 hover:scale-125"
                      onMouseEnter={() => setHoveredLocation(node.name)}
                      onMouseLeave={() => setHoveredLocation(null)}
                    >
                      {/* Pulse Circle for active matches */}
                      {isMatch && (
                        <circle
                          r="5"
                          className="fill-amber-400 opacity-60 animate-ping"
                        />
                      )}
                      
                      {/* Inner Node Circle */}
                      <circle
                        r={isHovered ? "4" : "3"}
                        className={isMatch ? "fill-amber-400 stroke-slate-900" : "fill-slate-600"}
                        strokeWidth="1"
                      />

                      {/* Label Text */}
                      <text
                        x="5"
                        y="1.5"
                        fontSize="2.8"
                        className={isMatch ? "fill-white font-bold" : "fill-slate-500"}
                      >
                        {node.name.split(' ')[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Hover Tooltip Overlay */}
              {hoveredLocation && (
                <div className="absolute top-4 right-4 bg-slate-900/90 border border-amber-400 p-3 rounded-lg text-xs text-white shadow-xl animate-fade-in pointer-events-none">
                  <p className="font-bold text-amber-400">{hoveredLocation}</p>
                  <p className="text-[11px] text-slate-300">국가 정보통신/전기 전문 시공 현장</p>
                </div>
              )}
            </div>

            {/* Map Note Footer */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                좌표 데이터는 보안 가이드에 따른 대표 시공 거점 표현 데모 데이터입니다.
              </span>
            </div>
          </div>

          {/* Right: Filtered Projects List */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                선택 분야 주요 실적 ({filteredProjects.length}건)
              </h3>
            </div>

            <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
              {filteredProjects.map((p) => (
                <div
                  key={p.id}
                  className="bg-slate-800/90 hover:bg-slate-800 p-4 rounded-xl border border-slate-700/80 hover:border-amber-400/50 transition-all text-xs"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="px-2 py-0.5 bg-amber-400/20 text-amber-400 font-bold rounded text-[10px]">
                      {p.category}
                    </span>
                    <span className="text-slate-400">{p.year} | {p.region}</span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1 leading-snug">
                    {p.title}
                  </h4>

                  <p className="text-slate-300 line-clamp-2 text-[11px] bg-slate-900/60 p-2 rounded border border-slate-800">
                    {p.scope}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
