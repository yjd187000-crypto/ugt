import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Layers, Briefcase, MessageSquare } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const location = useLocation();

  const items = [
    { label: '홈', path: '/', icon: Home },
    { label: '사업', path: '/business', icon: Layers },
    { label: '실적', path: '/projects', icon: Briefcase },
    { label: '문의', path: '/contact', icon: MessageSquare }
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2 shadow-lg">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center min-w-[64px] min-h-[48px] px-2 py-1 rounded-xl transition-all ${
                isActive
                  ? 'text-ug-navy font-bold'
                  : 'text-slate-500 hover:text-slate-900 font-medium'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'text-ug-navy' : 'text-slate-500'}`} />
                {isActive && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full" />
                )}
              </div>
              <span className={`text-[11px] mt-1 ${isActive ? 'text-ug-navy font-bold' : 'text-slate-600'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
