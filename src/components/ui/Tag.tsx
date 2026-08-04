import React from 'react';

interface TagProps {
  label: string;
  variant?: 'yellow' | 'navy' | 'gray' | 'dark';
  className?: string;
}

export const Tag: React.FC<TagProps> = ({ label, variant = 'gray', className = '' }) => {
  const variantStyles = {
    yellow: 'bg-amber-400 text-slate-900 font-bold border border-amber-400',
    navy: 'bg-ug-navy text-white font-bold border border-ug-navy',
    gray: 'bg-slate-100 text-slate-700 border border-slate-200 font-bold',
    dark: 'bg-slate-900 text-amber-400 border border-slate-800 font-bold'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-xs text-[11px] uppercase tracking-wider whitespace-nowrap transition-colors ${variantStyles[variant]} ${className}`}>
      {label}
    </span>
  );
};

interface ChipProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  count?: number;
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  selected = false,
  onClick,
  count,
  className = ''
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center px-4 py-1.5 rounded-sm text-xs font-bold tracking-tight transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 whitespace-nowrap ${
        selected
          ? 'bg-ug-navy text-white shadow-xs'
          : 'bg-white text-slate-700 border border-gray-300 hover:border-ug-navy hover:bg-slate-50'
      } ${className}`}
    >
      <span>{label}</span>
      {count !== undefined && (
        <span
          className={`ml-2 px-1.5 py-0.5 rounded-xs text-[10px] font-bold ${
            selected ? 'bg-amber-400 text-slate-900' : 'bg-slate-100 text-slate-600'
          }`}
        >
          {count}
        </span>
      )}
    </button>
  );
};
