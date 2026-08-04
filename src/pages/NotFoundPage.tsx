import React from 'react';
import { Button } from '../components/ui/Button';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-slate-50 text-slate-900 min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 bg-amber-400/20 text-ug-navy rounded-sm flex items-center justify-center mx-auto font-black text-2xl border border-amber-400">
          404
        </div>

        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          페이지를 찾을 수 없습니다
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed">
          요청하신 페이지가 삭제되었거나 주소가 변경되었습니다. <br />
          주소를 다시 확인해 주시기 바랍니다.
        </p>

        <div className="flex justify-center gap-3 pt-2">
          <Button variant="primary" to="/" icon={<Home className="w-4 h-4" />}>
            메인 페이지로 이동
          </Button>
        </div>
      </div>
    </div>
  );
};
