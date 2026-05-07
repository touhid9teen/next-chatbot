"use client";

import React from 'react';
import { Send, ShoppingBag, RotateCcw } from 'lucide-react';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: (text?: string) => void;
  loading: boolean;
}

export default function ChatInput({ value, onChange, onSend, loading }: ChatInputProps) {
  const quickActions = [
    { label: 'Track Order', icon: <ShoppingBag className="w-3.5 h-3.5" /> },
    { label: 'Return Policy', icon: <RotateCcw className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="p-5 bg-white border-t border-slate-100 shrink-0">
      <div className="flex flex-wrap gap-2.5 mb-4">
        {quickActions.map(action => (
          <button
            key={action.label}
            className="cursor-pointer rounded-full px-4 py-1.5 flex items-center gap-2 text-[11px] font-bold tracking-wide uppercase border border-slate-200 bg-slate-50 text-slate-500 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            onClick={() => onSend(action.label)}
            disabled={loading}
          >
            {action.icon} {action.label}
          </button>
        ))}
      </div>
      <div className="relative flex items-center group">
        <input
          type="text"
          placeholder="Type your message..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              onSend();
            }
          }}
          disabled={loading}
          className="w-full rounded-2xl py-3.5 pl-5 pr-14 text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-slate-400 font-medium"
        />
        <button
          onClick={() => onSend()}
          disabled={!value.trim() || loading}
          className="absolute right-2 w-10 h-10 flex items-center justify-center bg-primary hover:bg-primary/90 text-white rounded-xl transition-all disabled:opacity-50 disabled:bg-slate-300 disabled:cursor-not-allowed shadow-lg shadow-primary/20 active:scale-95"
        >
          <Send className="w-5 h-5 translate-x-[-1px] translate-y-[1px]" />
        </button>
      </div>
    </div>
  );
}
