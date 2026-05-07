"use client";

import React from 'react';

interface ChatMessageProps {
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function ChatMessage({ text, sender, timestamp }: ChatMessageProps) {
  return (
    <div className={`max-w-[85%] ${sender === 'user' ? 'self-end' : 'self-start'}`}>
      <div className={`p-5 px-6 text-[15px] leading-relaxed font-medium transition-all duration-300 ${
        sender === 'user' 
          ? 'rounded-[28px_28px_4px_28px] bg-gradient-to-br from-primary to-blue-700 text-white shadow-[0_8px_20px_-6px_rgba(22,119,255,0.4)]' 
          : 'rounded-[28px_28px_28px_4px] bg-white text-slate-700 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-slate-100/80 hover:shadow-md'
      }`}>
        {text}
      </div>
      <div className={`flex items-center gap-1.5 mt-2.5 opacity-60 ${sender === 'user' ? 'justify-end mr-2' : 'justify-start ml-2'}`}>
        <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
}
