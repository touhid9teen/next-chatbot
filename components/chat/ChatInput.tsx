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
    <div className="p-4 bg-white border-t border-gray-100 shrink-0">
      <div className="flex flex-wrap gap-2 mb-3">
        {quickActions.map(action => (
          <button
            key={action.label}
            className="cursor-pointer rounded-full px-3 py-1 flex items-center gap-1.5 text-xs font-medium border border-gray-200 bg-gray-50 text-gray-600 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => onSend(action.label)}
            disabled={loading}
          >
            {action.icon} {action.label}
          </button>
        ))}
      </div>
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Ask me anything..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              onSend();
            }
          }}
          disabled={loading}
          className="w-full rounded-full py-2.5 pl-4 pr-12 text-sm bg-white border border-gray-200 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm disabled:opacity-50 disabled:bg-gray-50"
        />
        <button
          onClick={() => onSend()}
          disabled={!value.trim() || loading}
          className="absolute right-1.5 w-8 h-8 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors disabled:opacity-50 disabled:bg-gray-300 disabled:cursor-not-allowed shadow-sm"
        >
          <Send className="w-4 h-4 translate-x-[-1px] translate-y-[1px]" />
        </button>
      </div>
    </div>
  );
}
