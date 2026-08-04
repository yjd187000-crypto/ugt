import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Input, Select, Textarea } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
  Paperclip,
  FileSpreadsheet,
  ExternalLink,
  LogOut,
  Sparkles,
  Loader2,
  Lock
} from 'lucide-react';
import { User } from 'firebase/auth';
import {
  initAuth,
  googleSignIn,
  googleSignOut,
  getCachedAccessToken,
  appendInquiryToSheet,
  getSavedSpreadsheetId
} from '../lib/sheetsService';
import { GoogleSignInButton } from '../components/ui/GoogleSignInButton';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    category: '이동통신',
    projectRegion: '',
    schedule: '',
    message: '',
    fileName: '',
    privacyAgreed: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [sheetUrl, setSheetUrl] = useState<string | null>(null);

  // Google OAuth State
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [submitErrorMsg, setSubmitErrorMsg] = useState<string | null>(null);

  // Check saved sheet
  const savedSheetId = getSavedSpreadsheetId();

  useEffect(() => {
    const unsubscribe = initAuth(
      (user, token) => {
        setAuthUser(user);
        setAuthToken(token);
      },
      () => {
        setAuthUser(null);
        setAuthToken(null);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    setIsAuthLoading(true);
    setSubmitErrorMsg(null);
    try {
      const result = await googleSignIn();
      if (result) {
        setAuthUser(result.user);
        setAuthToken(result.accessToken);
      }
    } catch (err: any) {
      console.error('Google 로그인 실패:', err);
      setSubmitErrorMsg('Google 로그인 중 오류가 발생했습니다: ' + (err?.message || '알 수 없는 오류'));
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handleGoogleLogout = async () => {
    await googleSignOut();
    setAuthUser(null);
    setAuthToken(null);
  };

  const categories = [
    { value: '이동통신', label: '이동통신 (5G·LTE 기지국, 특화망)' },
    { value: '광통신', label: '광통신 (FTTH, 광케이블 접속, OTDR)' },
    { value: 'ITS', label: 'ITS·스마트시티 (고속도로, VMS, C-ITS)' },
    { value: '철도', label: '철도통신 (LTE-R, 터널 LCX)' },
    { value: '전기', label: '전기설비 (수배전반, 정류기, UPS)' },
    { value: '유지보수', label: '24/7 유지보수 및 긴급 장애 복구' },
    { value: '기타', label: '기타 프로젝트 / 채용 문의' }
  ];

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.companyName.trim()) errs.companyName = '회사명을 입력해 주세요.';
    if (!formData.contactName.trim()) errs.contactName = '담당자 성함을 입력해 주세요.';

    if (!formData.email.trim()) {
      errs.email = '이메일 주소를 입력해 주세요.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = '올바른 이메일 형식이 아닙니다.';
    }

    if (!formData.phone.trim()) errs.phone = '연락처를 입력해 주세요.';
    if (!formData.message.trim()) errs.message = '문의 내용을 작성해 주세요.';
    if (!formData.privacyAgreed) errs.privacyAgreed = '개인정보 수집 및 이용 동의가 필요합니다.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Called when clicking "프로젝트 문의 제출하기"
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitErrorMsg(null);

    // If user is not logged in with Google yet, trigger Google Sign in first or open confirm modal
    if (!authToken) {
      handleGoogleLoginAndConfirm();
    } else {
      setShowConfirmModal(true);
    }
  };

  const handleGoogleLoginAndConfirm = async () => {
    setIsAuthLoading(true);
    try {
      const res = await googleSignIn();
      if (res) {
        setAuthUser(res.user);
        setAuthToken(res.accessToken);
        setShowConfirmModal(true);
      }
    } catch (err: any) {
      setSubmitErrorMsg('구글 시트 연동을 위한 로그인에 실패했습니다.');
    } finally {
      setIsAuthLoading(false);
    }
  };

  // User confirmed writing to Google Sheet
  const handleConfirmSubmit = async () => {
    setShowConfirmModal(false);
    setIsSubmitting(true);
    setSubmittedStatus('idle');
    setSubmitErrorMsg(null);

    try {
      let tokenToUse = authToken || getCachedAccessToken();

      if (!tokenToUse) {
        const loginRes = await googleSignIn();
        if (loginRes) {
          tokenToUse = loginRes.accessToken;
          setAuthUser(loginRes.user);
          setAuthToken(tokenToUse);
        } else {
          throw new Error('Google OAuth 인증 토큰이 유효하지 않습니다.');
        }
      }

      // Append data to Google Sheets
      const result = await appendInquiryToSheet(formData, tokenToUse!);
      setSheetUrl(result.spreadsheetUrl);
      setSubmittedStatus('success');
    } catch (err: any) {
      console.error('Submit to Google Sheets error:', err);
      setSubmitErrorMsg(err?.message || '구글 시트로 데이터를 전송하는 중 오류가 발생했습니다.');
      setSubmittedStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  return (
    <div className="pt-20 md:pt-28 pb-20 bg-slate-50 text-slate-900">
      
      {/* Banner */}
      <section className="bg-ug-navy text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
            PROJECT & PARTNERSHIP INQUIRY · 문의하기
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            신뢰할 수 있는 기술 파트너, <br />
            <span className="text-amber-400">㈜유지텔레컴</span>에 문의하세요.
          </h1>
          <p className="text-slate-300 max-w-2xl text-sm md:text-base leading-relaxed">
            광통신망, 5G/LTE 기지국, 고속도로 ITS, 철도통신, 전기설비 견적 및 시공 상담을 신속하게 지원해 드립니다.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left: Contact Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                HEADQUARTERS CONTACT
              </span>
              <h2 className="text-2xl font-bold">{COMPANY_INFO.name} 본사</h2>
              <p className="text-xs text-slate-400 mt-1">{COMPANY_INFO.englishName}</p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800 text-xs md:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 font-semibold block">본사 주소</span>
                  <span className="text-white">{COMPANY_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 font-semibold block">대표 전화</span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-amber-400 font-bold hover:underline">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 font-semibold block">공식 이메일</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-amber-400 font-bold hover:underline">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-1">
              <p>• 대표이사: {COMPANY_INFO.ceo}</p>
              <p>• 설립일: {COMPANY_INFO.established}</p>
              <p>• 운영시간: 평일 09:00 ~ 18:00 (24시간 비상상황실 대기)</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              신속 답변 가이드
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              접수된 문의는 24시간 이내에 담당 사업부 엔지니어가 검토하여 사전 기술 상담 및 서면 견적 가이드를 안내해 드립니다.
            </p>
          </div>

          {/* Google Sheets Live Status Box */}
          <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-6 space-y-3 text-slate-800">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <FileSpreadsheet className="w-5 h-5 text-emerald-600" />
              <span>Google Sheets 실시간 연동 서비스</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              본 시스템은 Google Sheets API와 연동되어 문의 제출 시 <strong>[㈜유지텔레컴] 프로젝트 문의 접수현황</strong> 시트에 즉시 자동 기재됩니다.
            </p>

            {authUser ? (
              <div className="pt-2 border-t border-emerald-200 text-xs space-y-2">
                <div className="flex items-center justify-between text-slate-700">
                  <span className="font-semibold text-emerald-900">연결된 Google 계정:</span>
                  <button
                    onClick={handleGoogleLogout}
                    className="text-slate-500 hover:text-red-600 inline-flex items-center gap-1 text-[11px]"
                    title="로그아웃"
                  >
                    <LogOut className="w-3 h-3" /> Logout
                  </button>
                </div>
                <p className="font-medium text-slate-900 truncate bg-white px-2.5 py-1.5 rounded border border-emerald-200 text-[11px]">
                  {authUser.email}
                </p>
                {savedSheetId && (
                  <a
                    href={`https://docs.google.com/spreadsheets/d/${savedSheetId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-700 hover:text-emerald-900 font-bold hover:underline pt-1"
                  >
                    <span>구글 시트 문서 열기</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ) : (
              <div className="pt-2 border-t border-emerald-200">
                <p className="text-[11px] text-slate-500 mb-2">
                  제출 시 Google 계정 인증이 필요합니다.
                </p>
                <GoogleSignInButton
                  onClick={handleGoogleLogin}
                  disabled={isAuthLoading}
                  label={isAuthLoading ? '로그인 처리 중...' : 'Google 계정 연결하기'}
                />
              </div>
            )}
          </div>
        </div>

        {/* Right: Comprehensive B2B Inquiry Form */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-slate-200 shadow-xl">
          <div className="mb-6 pb-4 border-b border-slate-200 flex items-center justify-between flex-wrap gap-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">프로젝트 견적 및 기술 문의 작성</h2>
              <p className="text-xs text-slate-500 mt-1">
                필수 항목(<span className="text-amber-500 font-bold">*</span>)을 정확히 입력해 주시기 바랍니다.
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-xs font-bold">
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
              <span>Google Sheets 연동</span>
            </div>
          </div>

          {submitErrorMsg && (
            <div className="mb-6 bg-red-50 border border-red-200 p-4 rounded-xl flex items-start gap-3 text-red-800 text-xs">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-bold">안내사항</p>
                <p className="mt-0.5 leading-relaxed">{submitErrorMsg}</p>
              </div>
            </div>
          )}

          {submittedStatus === 'success' ? (
            <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-xl text-center space-y-5 animate-fade-in">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
              <div>
                <h3 className="text-2xl font-extrabold text-emerald-950">
                  프로젝트 문의가 성공적으로 접수되었습니다!
                </h3>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto mt-2">
                  제출해주신 고객 정보와 프로젝트 내용이 구글 시트(Google Sheets)에 성공적으로 추가 및 저장되었습니다.
                </p>
              </div>

              {sheetUrl && (
                <div className="p-4 bg-white border border-emerald-300 rounded-lg max-w-md mx-auto shadow-xs text-left space-y-2">
                  <div className="flex items-center justify-between text-xs text-emerald-900 font-bold">
                    <span className="flex items-center gap-1.5">
                      <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                      연결된 구글 시트 문서
                    </span>
                    <span className="text-[10px] text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded font-semibold">
                      실시간 업데이트됨
                    </span>
                  </div>
                  <a
                    href={sheetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-sm text-xs transition-colors shadow-xs"
                  >
                    <span>구글 시트에서 접수내역 확인하기</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}

              <div className="pt-2">
                <Button
                  variant="primary"
                  onClick={() => {
                    setSubmittedStatus('idle');
                    setFormData({
                      companyName: '',
                      contactName: '',
                      email: '',
                      phone: '',
                      category: '이동통신',
                      projectRegion: '',
                      schedule: '',
                      message: '',
                      fileName: '',
                      privacyAgreed: false
                    });
                  }}
                >
                  새 문의 작성하기
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="회사명 (기관명)"
                  required
                  placeholder="예: ㈜한국통신인프라"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  error={errors.companyName}
                />

                <Input
                  label="담당자 성함"
                  required
                  placeholder="예: 홍길동 팀장"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  error={errors.contactName}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="이메일 주소"
                  type="email"
                  required
                  placeholder="example@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  error={errors.email}
                />

                <Input
                  label="연락처 (전화번호)"
                  required
                  placeholder="010-0000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  error={errors.phone}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Select
                  label="문의 분야"
                  required
                  options={categories}
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                />

                <Input
                  label="프로젝트 지역"
                  placeholder="예: 수도권, 충남"
                  value={formData.projectRegion}
                  onChange={(e) => setFormData({ ...formData, projectRegion: e.target.value })}
                />

                <Input
                  label="예상 착공 일정"
                  placeholder="예: 2025년 상반기"
                  value={formData.schedule}
                  onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
                />
              </div>

              <Textarea
                label="문의 내용"
                required
                rows={5}
                placeholder="시공 구간, 대략적인 규격, 광선로 스펙 등 문의 사항을 상세히 남겨주세요."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                error={errors.message}
              />

              {/* File Attachment */}
              <div>
                <label className="block text-xs md:text-sm font-medium text-slate-700 mb-1.5">
                  첨부파일 (도면, RFP 시방서 등)
                </label>
                <div className="flex items-center gap-3">
                  <label className="cursor-pointer inline-flex items-center px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 rounded-lg text-xs font-medium transition-colors">
                    <Paperclip className="w-4 h-4 mr-1.5" />
                    파일 선택
                    <input type="file" className="hidden" onChange={handleFileChange} />
                  </label>
                  <span className="text-xs text-slate-500 truncate">
                    {formData.fileName || '선택된 파일 없음 (최대 10MB)'}
                  </span>
                </div>
              </div>

              {/* Privacy Policy Agreement Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.privacyAgreed}
                    onChange={(e) => setFormData({ ...formData, privacyAgreed: e.target.checked })}
                    className="mt-0.5 rounded border-slate-300 text-ug-navy focus:ring-amber-400"
                  />
                  <span className="text-xs text-slate-600">
                    <span className="font-bold text-slate-900">[필수] 개인정보 수집 및 이용 동의</span>: 입력해주신 회사명, 성함, 연락처, 이메일은 견적 및 문의 응대 목적 외 용도로 사용되지 않습니다.
                  </span>
                </label>
                {errors.privacyAgreed && (
                  <p className="text-xs text-red-600 mt-1">{errors.privacyAgreed}</p>
                )}
              </div>

              {/* Google Sheets Sync Badge Info */}
              <div className="p-3 bg-slate-50 rounded-sm border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                  <span>제출 시 Google Sheets <strong>'[㈜유지텔레컴] 프로젝트 문의 접수현황'</strong>에 자동 기재됩니다.</span>
                </div>
                {authUser ? (
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Google 계정 연결됨
                  </span>
                ) : (
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                    제출 시 Google 로그인 진행
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting || isAuthLoading}
                  icon={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  fullWidth
                  className="py-3.5 font-bold"
                >
                  {isSubmitting ? '구글 시트로 정보 기재 중...' : '프로젝트 문의 제출하기'}
                </Button>
              </div>
            </form>
          )}
        </div>

      </div>

      {/* Confirmation Dialog before mutating Google Sheets data */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl border border-slate-200 max-w-md w-full p-6 space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center gap-3 text-slate-900 border-b border-slate-200 pb-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base">Google Sheets에 고객 정보 저장</h3>
                <p className="text-xs text-slate-500">프로젝트 문의 데이터 기재 확인</p>
              </div>
            </div>

            <div className="text-xs text-slate-700 space-y-2 leading-relaxed">
              <p>
                작성하신 프로젝트 문의 데이터를 <strong>Google Sheets ('[㈜유지텔레컴] 프로젝트 문의 접수현황')</strong> 문서에 저장하시겠습니까?
              </p>

              <div className="bg-slate-50 p-3 rounded border border-slate-200 space-y-1 text-[11px] font-medium text-slate-800">
                <p>• <strong>회사명:</strong> {formData.companyName}</p>
                <p>• <strong>담당자:</strong> {formData.contactName} ({formData.email} / {formData.phone})</p>
                <p>• <strong>문의분야:</strong> {formData.category}</p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-sm text-xs font-bold transition-colors"
              >
                취소
              </button>
              <button
                type="button"
                onClick={handleConfirmSubmit}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-sm text-xs font-bold transition-colors shadow-xs inline-flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>확인 및 저장하기</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
