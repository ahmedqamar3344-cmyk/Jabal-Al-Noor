import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, MessageSquare, Sparkles, User, RefreshCw, Phone, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Language } from '../types';

interface AIAssistantProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ lang, isOpen, onClose }) => {
  const isAr = lang === 'ar';
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: isAr
        ? `مرحباً بك! أنا "مساعد جبل النور الهندسي الذكي". يمكنني مساعدتك في تقدير كميات الركام وصخور الدروع، حساب عدد شاحنات الأسطول (تريلات 45م³)، متطلبات قطع الجبال، أو تجهيز عرض سعر فوري للمشروع. كيف يمكنني خدمتك اليوم؟`
        : `Welcome! I am the Jabal Al Noor AI Engineering & Fleet Consultant. I can help you calculate aggregate tonnage, 45m³ tipper fleet requirements, mountain rock cutting machinery, marine breakwater armor sizing, or prepare a formal quotation for WhatsApp dispatch (+971 56 7499047). How can I assist you?`,
      timestamp: 'Just now',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickPrompts = isAr
    ? [
        'من صنعك؟',
        'كيف تنفذون كواسر الأمواج وتنزيل صخور الدروع 1-7 طن؟',
        'ما هي قدراتكم في استصلاح الأراضي البحرية وبناء المنزلقات؟',
        'كم تريلة 45م³ أحتاج لنقل 10,000 طن ركام وصخور للميناء؟',
        'تجهيز مسودة عرض سعر أعمال بحرية لإرسالها للواتساب',
      ]
    : [
        'Who created you?',
        'How do you build offshore breakwaters & place 1-7T armor rock?',
        'What are your marine reclamation & boat slipway capabilities?',
        'How many 45m³ tippers needed for 10,000 tons rock to port?',
        'Draft a Marine Construction RFQ to send to WhatsApp',
      ];

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      role: 'user',
      content: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    // Check for creator query
    const cleanLower = textToSend.toLowerCase().trim();
    const isCreatorQuery =
      /who (created|made|built|developed|designed|coded|programmed) (you|this|the website)|who is your (creator|developer|maker|author|programmer)|who are you made by|who made this|who created this|من (صنعك|طورك|انشاك|برمجك|صممك|خلقك|سواك|عملك)|من طور هذا الموقع|من صنع هذا الموقع|من برمج هذا الموقع/i.test(
        cleanLower
      );

    if (isCreatorQuery) {
      setTimeout(() => {
        const reply = isAr
          ? 'تم إنشائي وتطويري بواسطة أحمد قمر (I was created by Ahmed Qamar).'
          : 'I was created by Ahmed Qamar.';
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: reply,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      }, 300);
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend }),
      });

      const data = await res.json();
      const assistantMsg: ChatMessage = {
        role: 'assistant',
        content: data.reply || (isAr ? 'عذراً، يرجى التواصل مع إدارة الحركة عبر واتساب: +971 56 7499047' : 'Please connect directly with our WhatsApp dispatch at +971 56 7499047.'),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackMsg: ChatMessage = {
        role: 'assistant',
        content: isAr
          ? `شكراً لتواصلك مع جبل النور. أسطولنا يضم أكثر من 150 آلية وتريلات 45م³ جاهزة للنقل الفوري. يمكنك التواصل فوراً مع إدارة الحركة عبر واتساب: +971 56 7499047 أو الاتصال بالهاتف: 09 2341307.`
          : `Thank you for contacting Jabal Al Noor! Our heavy fleet of 150+ units is ready for immediate deployment. For instant mobilization and rate cards, please WhatsApp our dispatch at +971 56 7499047 or call 09 2341307.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end p-2 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-md h-[92vh] bg-slate-950 border border-slate-800 rounded-xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-md">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-white font-display">
                  {isAr ? 'مساعد جبل النور الذكي' : 'Jabal Al Noor AI'}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <span className="text-[11px] text-amber-400 font-mono">
                Gemini 3.8 · Fleet &amp; Engineering
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* WhatsApp Quick Hotline Banner */}
        <div className="px-4 py-2 bg-emerald-950/60 border-b border-emerald-800/60 flex items-center justify-between text-[11px]">
          <span className="text-emerald-300 font-medium">
            {isAr ? 'واتساب الإدارة المباشر:' : 'Direct WhatsApp Hotline:'}
          </span>
          <a
            href={`https://wa.me/${COMPANY_INFO.contacts.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 font-mono font-bold text-emerald-400 hover:underline"
          >
            <MessageSquare className="w-3 h-3 fill-current" />
            <span>+971 56 7499047</span>
          </a>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-lg p-3.5 leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'bg-amber-400 text-slate-950 font-medium rounded-tr-none'
                    : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-tl-none'
                }`}
              >
                {msg.content}
              </div>
              <span className="text-[10px] text-slate-500 mt-1 font-mono px-1">
                {msg.timestamp}
              </span>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-slate-400 text-xs italic">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-400" />
              <span>{isAr ? 'جاري التحليل الهندسي...' : 'Analyzing fleet specs & engineering database...'}</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="p-2.5 bg-slate-900/60 border-t border-slate-800 overflow-x-auto flex gap-1.5 no-scrollbar">
          {quickPrompts.map((prompt, i) => (
            <button
              key={i}
              onClick={() => handleSend(prompt)}
              className="text-[11px] px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-slate-700 whitespace-nowrap transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={
              isAr
                ? 'اسأل عن الآليات، الأسعار، أو مسارات النقل...'
                : 'Ask about fleet sizing, rock armor, or rates...'
            }
            className="flex-1 bg-slate-900 border border-slate-700 rounded px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
          />

          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className="p-2 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-slate-950 rounded font-bold transition-all shadow"
          >
            <Send className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>

        {/* Send Conversation to WhatsApp Footer */}
        <div className="px-3 py-2 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-[11px]">
          <span className="text-slate-400">
            {isAr ? 'تأكيد الحجز عبر واتساب' : 'Finalize on WhatsApp'}
          </span>
          <a
            href={`https://wa.me/${COMPANY_INFO.contacts.whatsapp}?text=${encodeURIComponent(
              isAr
                ? 'مرحباً، أود متابعة استفساري مع مهندس حركة الأسطول في جبل النور: +971 56 7499047'
                : 'Hello, I would like to finalize my RFQ and machinery booking with Jabal Al Noor dispatch: +971 56 7499047'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold"
          >
            <MessageSquare className="w-3 h-3 fill-current" />
            <span>+971 56 7499047</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
