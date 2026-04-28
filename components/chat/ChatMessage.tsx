"use client";

import React from 'react';

interface ChatMessageProps {
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function ChatMessage({ text, sender, timestamp }: ChatMessageProps) {
  return (
    <div className={`max-w-[80%] ${sender === 'user' ? 'self-end' : 'self-start'}`}>
      <div className={`p-3 px-4 text-sm leading-relaxed ${
        sender === 'user' 
          ? 'rounded-[18px_18px_0_18px] bg-blue-600 text-white' 
          : 'rounded-[18px_18px_18px_0] bg-white text-gray-800 shadow-sm border border-gray-100'
      }`}>
        {text}
      </div>
      <span className={`text-[10px] mt-1 block text-gray-400 ${sender === 'user' ? 'text-right' : 'text-left'}`}>
        {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </span>
    </div>
  );
}
