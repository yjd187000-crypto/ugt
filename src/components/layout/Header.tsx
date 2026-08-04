import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../../data/companyData';
import { Button } from '../ui/Button';
import { Search, Menu, X, Radio, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenBrochure: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, onOpenBrochure }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '회사소개', path: '/about' },
    { label: '사업영역', path: '/business' },
    { label: '프로젝트', path: '/projects' },
    { label: '기술·안전', path: '/technology' },
    { label: '인재채용', path: '/careers' }
  ];

  const headerBgClass = isHome && !isScrolled
    ? 'bg-slate-950/40 backdrop-blur-md border-b border-white/10 text-white'
    : 'bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-sm';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${headerBgClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group focus:outline-none">
            <div className="w-10 h-10 rounded-sm bg-ug-navy flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-ug-navy transition-colors shadow-xs">
              <span className="font-bold text-lg tracking-tighter">UG</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`font-bold text-base md:text-lg tracking-tight ${isHome && !isScrolled ? 'text-white' : 'text-slate-900'}`}>
                ㈜유지텔레컴
              </span>
              <span className={`text-[10px] tracking-widest font-medium uppercase ${isHome && !isScrolled ? 'text-amber-400' : 'text-slate-500'}`}>
                UG Telecom Co., Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 h-full">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors relative py-1.5 ${
                    isActive
                      ? isHome && !isScrolled ? 'text-amber-400 font-bold border-b-2 border-amber-400' : 'text-ug-navy font-bold border-b-2 border-ug-navy'
                      : isHome && !isScrolled ? 'text-slate-200 hover:text-white' : 'text-slate-600 hover:text-ug-navy'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenSearch}
              className={`p-2.5 rounded-full transition-colors ${
                isHome && !isScrolled
                  ? 'hover:bg-white/10 text-white'
                  : 'hover:bg-slate-100 text-slate-700'
              }`}
              aria-label="사이트 검색"
            >
              <Search className="w-5 h-5" />
            </button>

            <Button
              variant="outlined"
              onClick={onOpenBrochure}
              className={`py-2 px-3 text-xs md:text-sm ${
                isHome && !isScrolled ? 'border-white/30 text-white hover:bg-white/10' : ''
              }`}
            >
              회사소개서
            </Button>

            <Button
              variant="primary"
              to="/contact"
              icon={<ArrowUpRight className="w-4 h-4" />}
              iconPosition="right"
              className="py-2 px-4 text-xs md:text-sm"
            >
              프로젝트 문의
            </Button>
          </div>

          {/* Mobile Header Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className={`p-2 rounded-lg transition-colors ${
                isHome && !isScrolled ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="검색"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isHome && !isScrolled ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="메뉴 열기/닫기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-lg flex flex-col justify-between p-6 text-white animate-fade-in lg:hidden">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Radio className="w-6 h-6 text-amber-400" />
              <span className="font-bold text-lg">UG TELECOM</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-400 hover:text-white rounded-full bg-slate-900"
              aria-label="메뉴 닫기"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 my-8">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-xl font-bold py-2 border-b border-slate-800/50 ${
                location.pathname === '/' ? 'text-amber-400' : 'text-slate-200'
              }`}
            >
              메인 (홈)
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xl font-bold py-2 border-b border-slate-800/50 ${
                  location.pathname === link.path ? 'text-amber-400' : 'text-slate-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-3 pt-4 border-t border-slate-800">
            <Button
              variant="inverted"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrochure();
              }}
              fullWidth
            >
              회사소개서 다운로드
            </Button>
            <Button
              variant="primary"
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              fullWidth
            >
              프로젝트 문의하기
            </Button>
            <div className="text-center text-xs text-slate-400 pt-2">
              대표전화: {COMPANY_INFO.phone} | {COMPANY_INFO.email}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
