import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
  helpText?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  required,
  helpText,
  id,
  className = '',
  ...props
}) => {
  const inputId = id || `input-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="w-full">
      <label htmlFor={inputId} className="block text-xs md:text-sm font-medium text-slate-700 mb-1.5">
        {label} {required && <span className="text-amber-500 font-bold">*</span>}
      </label>
      <input
        id={inputId}
        className={`w-full px-3.5 py-2.5 bg-white border ${
          error ? 'border-red-500 focus:ring-red-400' : 'border-slate-300 focus:border-ug-navy focus:ring-amber-400'
        } rounded-lg text-sm text-slate-900 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      {helpText && !error && <p className="mt-1 text-xs text-slate-500">{helpText}</p>}
    </div>
  );
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
  required?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  error,
  required,
  id,
  className = '',
  ...props
}) => {
  const selectId = id || `select-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="w-full">
      <label htmlFor={selectId} className="block text-xs md:text-sm font-medium text-slate-700 mb-1.5">
        {label} {required && <span className="text-amber-500 font-bold">*</span>}
      </label>
      <select
        id={selectId}
        className={`w-full px-3.5 py-2.5 bg-white border ${
          error ? 'border-red-500 focus:ring-red-400' : 'border-slate-300 focus:border-ug-navy focus:ring-amber-400'
        } rounded-lg text-sm text-slate-900 transition-colors focus:outline-none focus:ring-2 ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
};

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  required,
  id,
  className = '',
  ...props
}) => {
  const textareaId = id || `textarea-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="w-full">
      <label htmlFor={textareaId} className="block text-xs md:text-sm font-medium text-slate-700 mb-1.5">
        {label} {required && <span className="text-amber-500 font-bold">*</span>}
      </label>
      <textarea
        id={textareaId}
        className={`w-full px-3.5 py-2.5 bg-white border ${
          error ? 'border-red-500 focus:ring-red-400' : 'border-slate-300 focus:border-ug-navy focus:ring-amber-400'
        } rounded-lg text-sm text-slate-900 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
};
