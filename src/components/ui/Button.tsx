import React from 'react';
import { Link } from 'react-router-dom';

export type ButtonVariant = 'primary' | 'secondary' | 'inverted' | 'outlined' | 'squareIcon' | 'circleAction';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children?: React.ReactNode;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  to,
  href,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  children,
  className = '',
  disabled = false,
  ariaLabel,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-bold tracking-tight transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const variantsMap: Record<ButtonVariant, string> = {
    primary: 'bg-ug-navy hover:bg-ug-navy-dark text-white rounded-sm px-5 py-2.5 text-xs md:text-sm shadow-xs active:scale-[0.98]',
    secondary: 'bg-telecom-black hover:bg-neutral-800 text-white rounded-sm px-5 py-2.5 text-xs md:text-sm shadow-xs active:scale-[0.98]',
    inverted: 'bg-white hover:bg-slate-100 text-slate-900 border border-gray-300 rounded-sm px-5 py-2.5 text-xs md:text-sm shadow-xs active:scale-[0.98]',
    outlined: 'bg-white hover:bg-slate-50 text-ug-navy border border-ug-navy rounded-sm px-5 py-2.5 text-xs md:text-sm active:scale-[0.98]',
    squareIcon: 'bg-white hover:bg-slate-100 text-slate-700 border border-gray-200 rounded-sm p-2.5 text-sm transition-colors',
    circleAction: 'bg-white hover:bg-amber-400 hover:text-slate-900 text-slate-700 border border-gray-200 rounded-full p-3 shadow-sm transition-colors'
  };

  const combinedClasses = `${baseClasses} ${variantsMap[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className={`${children ? 'mr-2' : ''}`}>{icon}</span>}
      {children && <span>{children}</span>}
      {icon && iconPosition === 'right' && <span className={`${children ? 'ml-2' : ''}`}>{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)} {...props}>
      {content}
    </button>
  );
};
