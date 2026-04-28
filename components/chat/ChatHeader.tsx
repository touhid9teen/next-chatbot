"use client";

import React from 'react';
import { Bot, X } from 'lucide-react';

interface ChatHeaderProps {
  onClose: () => void;
}

export default function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div className="p-4 px-5 bg-blue-600 text-white flex items-center justify-between shadow-md z-10 shrink-0 rounded-t-none sm:rounded-t-2xl">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-blue-600 rounded-full"></div>
        </div>
        <div>
          <h2 className="text-white block leading-none font-bold text-base m-0 mb-1">Elevate AI</h2>
          <span className="text-blue-100 text-xs font-medium">Always online</span>
        </div>
      </div>
      <button
        onClick={onClose}
        className="p-2 rounded-full hover:bg-white/20 transition-colors text-white flex items-center justify-center"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
