"use client";

import React from 'react';
import { Bot, X } from 'lucide-react';

interface ChatHeaderProps {
  onClose: () => void;
}

export default function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div className="p-8 px-10 bg-primary text-white flex items-center justify-between shadow-lg z-10 shrink-0 rounded-t-none sm:rounded-t-[28px]">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-inner">
            <Bot className="w-7 h-7 text-white" />
          </div>
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-primary rounded-full shadow-sm"></div>
        </div>
        <div>
          <h2 className="text-white block leading-none font-bold text-lg m-0 mb-1">Elevate AI</h2>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-blue-100 text-[11px] font-medium tracking-wide uppercase">Always online</span>
          </div>
        </div>
      </div>
      <button
        onClick={onClose}
        className="p-2.5 rounded-full hover:bg-white/10 transition-all text-white/80 hover:text-white flex items-center justify-center"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
