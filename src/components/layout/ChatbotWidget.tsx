import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  RotateCcw,
  PhoneCall,
  FileText,
  Mail,
  ChevronDown,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: string;
  action?: {
    label: string;
    type: 'contact' | 'brochure' | 'business' | 'projects';
  };
}

interface ChatbotWidgetProps {
  onOpenBrochure?: () => void;
  onOpenContact?: () => void;
}

const INITIAL_GREETING: ChatMessage = {
  id: 'init-1',
  role: 'model',
  content: `안녕하세요! ㈜유지텔레컴 AI 스마트 상담원입니다. 🤖\n\n광통신망, 5G·LTE, ITS 지능형교통체계, 철도통신, 전기설비 공사 및 견적 문의에 대해 안내해 드립니다. 궁금하신 점을 말씀해 주세요!`,
  timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
};

const SUGGESTED_PROMPTS = [
  '주요 사업 분야는 무엇인가요?',
  '견적 및 공사 문의 방법',
  '회사 위치 및 대표 연락처',
  '특화 자격 및 안전관리 인증'
];

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({
  onOpenBrochure,
  onOpenContact
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_GREETING]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [isTooltipVisible, setIsTooltipVisible] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Auto scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      setIsTooltipVisible(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isLoading) return;

    const userTime = new Date().toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit'
    });

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: userTime
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsLoading(true);

    try {
      // Build history payload
      const historyPayload = messages.map((m) => ({
        role: m.role,
        content: m.content
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: historyPayload
        })
      });

      if (!response.ok) {
        throw new Error('API response failed');
      }

      const data = await response.json();
      const botTime = new Date().toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit'
      });

      let action: ChatMessage['action'] = undefined;
      const replyText = data.reply || '';

      if (replyText.includes('견적') || replyText.includes('문의') || query.includes('견적')) {
        action = { label: '견적 및 문의 작성하기', type: 'contact' };
      } else if (replyText.includes('브로슈어') || replyText.includes('소개서') || query.includes('브로슈어')) {
        action = { label: '회사소개서 브로슈어 보기', type: 'brochure' };
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'model',
        content: replyText,
        timestamp: botTime,
        action
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error('Chat bot error:', error);
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'model',
        content:
          '상담원 서비스 연결 중 일시적인 오류가 발생했습니다. 아래 대표전화나 이메일로 연락주시면 빠르게 안내해 드리겠습니다.\n\n📞 대표전화: 02-6672-8500\n✉️ 이메일: money@ugt.kr',
        timestamp: new Date().toLocaleTimeString('ko-KR', {
          hour: '2-digit',
          minute: '2-digit'
        }),
        action: { label: '견적 문의 페이지로 이동', type: 'contact' }
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([INITIAL_GREETING]);
  };

  const handleActionClick = (actionType: 'contact' | 'brochure' | 'business' | 'projects') => {
    if (actionType === 'contact') {
      if (onOpenContact) onOpenContact();
      else navigate('/contact');
      setIsOpen(false);
    } else if (actionType === 'brochure') {
      if (onOpenBrochure) onOpenBrochure();
      setIsOpen(false);
    } else if (actionType === 'business') {
      navigate('/business');
      setIsOpen(false);
    } else if (actionType === 'projects') {
      navigate('/projects');
      setIsOpen(false);
    }
  };

  const renderFormattedText = (text: string) => {
    return text.split('\n').map((paragraph, idx) => {
      if (!paragraph.trim()) return <div key={idx} className="h-2" />;
      
      // Simple bold formatting handling (**bold**)
      const parts = paragraph.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={idx} className="leading-relaxed mb-1 last:mb-0">
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={pIdx} className="font-bold text-amber-300">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Tooltip speech bubble when closed */}
      {!isOpen && isTooltipVisible && (
        <div className="pointer-events-auto mb-3 max-w-xs bg-slate-900 text-white text-xs p-3 rounded-md shadow-2xl border-l-4 border-l-amber-400 border border-slate-800 flex items-start gap-2.5 animate-bounce">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-bold text-amber-400">㈜유지텔레컴 AI 상담원</p>
            <p className="text-slate-300 text-[11px] mt-0.5">
              공사 견적, 광통신망, 5G 문의사항을 빠르게 안내해 드립니다.
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsTooltipVisible(false);
            }}
            className="text-slate-400 hover:text-white p-0.5 rounded"
            title="닫기"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="pointer-events-auto relative group bg-ug-navy hover:bg-ug-navy-dark text-white p-3.5 md:p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center border-2 border-amber-400 active:scale-95 focus:outline-none"
          aria-label="AI 스마트 상담원 열기"
        >
          <Bot className="w-6 h-6 md:w-7 h-7 text-amber-400 animate-pulse" />
          {hasUnread && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 border-2 border-ug-navy rounded-full" />
          )}
          <span className="hidden group-hover:inline-block absolute right-full mr-3 px-2.5 py-1 bg-slate-900 text-white text-xs font-bold rounded shadow-lg whitespace-nowrap">
            AI 스마트 상담원
          </span>
        </button>
      )}

      {/* Main Chatbot Window */}
      {isOpen && (
        <div className="pointer-events-auto w-[92vw] sm:w-[380px] md:w-[420px] h-[540px] max-h-[82vh] bg-slate-900 rounded-sm shadow-2xl border-2 border-amber-400/80 flex flex-col overflow-hidden text-slate-100 animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-ug-navy p-3.5 md:p-4 border-b border-slate-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-slate-900 border border-amber-400 flex items-center justify-center text-amber-400 relative">
                <Bot className="w-5 h-5" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-slate-900" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm text-white tracking-tight">㈜유지텔레컴 AI 상담원</h3>
                  <span className="text-[10px] bg-amber-400/20 text-amber-400 px-1.5 py-0.2 rounded font-bold uppercase">
                    AI Agent
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  실시간 질문 답변 가능
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                className="p-1.5 text-slate-400 hover:text-amber-400 hover:bg-slate-800 rounded transition-colors"
                title="대화 초기화"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                title="닫기"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Contact Bar */}
          <div className="bg-slate-950 px-3 py-1.5 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400 shrink-0">
            <a href="tel:02-6672-8500" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
              <PhoneCall className="w-3 h-3 text-amber-400" />
              <span>대표전화: 02-6672-8500</span>
            </a>
            <button
              onClick={() => handleActionClick('contact')}
              className="flex items-center gap-1 text-amber-400 hover:underline font-bold"
            >
              <Mail className="w-3 h-3" />
              <span>견적문의 작성</span>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-3 md:p-4 overflow-y-auto space-y-3.5 bg-slate-900/95 scrollbar-thin scrollbar-thumb-slate-700">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'model' && (
                  <div className="w-7 h-7 rounded bg-ug-navy border border-amber-400/60 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[85%] space-y-2 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`p-3 rounded-sm text-xs leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-amber-400 text-slate-950 font-medium ml-auto shadow-sm'
                        : 'bg-slate-800/90 text-slate-200 border border-slate-700/80 shadow-md'
                    }`}
                  >
                    {renderFormattedText(msg.content)}

                    {/* Interactive Action Button in Bot Response */}
                    {msg.action && (
                      <div className="mt-2.5 pt-2 border-t border-slate-700/60">
                        <button
                          onClick={() => handleActionClick(msg.action!.type)}
                          className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xs text-[11px] transition-colors shadow-xs"
                        >
                          <span>{msg.action.label}</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>

                  <span className={`text-[10px] text-slate-500 block ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.timestamp}
                  </span>
                </div>

                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-2.5 items-start">
                <div className="w-7 h-7 rounded bg-ug-navy border border-amber-400/60 flex items-center justify-center text-amber-400 shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-slate-800/90 border border-slate-700/80 p-3 rounded-sm text-xs text-slate-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  <span>㈜유지텔레컴 AI가 답변을 작성 중입니다...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Prompts Pills */}
          <div className="px-3 py-2 bg-slate-950 border-t border-slate-800 shrink-0">
            <p className="text-[10px] text-slate-400 mb-1.5 font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              자주 묻는 질문 추천:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {SUGGESTED_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  disabled={isLoading}
                  className="text-[11px] bg-slate-800 hover:bg-slate-700 hover:text-amber-300 text-slate-300 px-2 py-1 rounded-xs border border-slate-700 transition-colors disabled:opacity-50 text-left"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2 shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="질문 내용을 입력하세요..."
              disabled={isLoading}
              className="flex-1 bg-slate-900 text-white placeholder-slate-500 text-xs px-3 py-2.5 rounded-xs border border-slate-700 focus:outline-none focus:border-amber-400 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold p-2.5 rounded-xs transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              title="전송"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
};
