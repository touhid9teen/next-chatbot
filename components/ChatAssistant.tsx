"use client";

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X } from 'lucide-react';
import ChatHeader from './chat/ChatHeader';
import ChatMessage from './chat/ChatMessage';
import ChatInput from './chat/ChatInput';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function ChatAssistant() {
  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Elevate AI. How can I assist you with your shopping today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-open chat after 3 seconds on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async (text: string = inputValue) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });
      const data = await res.json();

      const aiMessage: Message = {
        id: Date.now() + 1,
        text: data.response,
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Chat error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed right-8 bottom-8 z-[2000] hidden sm:block">
        {!visible && (
          <div className="absolute bottom-[80px] right-0 bg-white px-5 py-3 rounded-2xl shadow-xl whitespace-nowrap text-[13px] font-semibold text-slate-700 animate-in fade-in slide-in-from-bottom-3 duration-500 border border-slate-100">
            <span className="mr-2">👋</span> Need help finding something?
            <div className="absolute -bottom-1.5 right-8 w-3 h-3 bg-white border-r border-b border-slate-100 transform rotate-45" />
          </div>
        )}
        <button
          onClick={() => setVisible(!visible)}
          className={`relative flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full shadow-2xl hover:bg-primary/90 hover:scale-110 active:scale-95 transition-all duration-300 ${
            !visible ? 'animate-bounce' : ''
          }`}
        >
          {visible ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
          {!visible && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
            </span>
          )}
        </button>
      </div>

      {visible && (
        <div className="fixed inset-x-4 bottom-4 top-4 sm:inset-auto sm:right-10 sm:bottom-32 z-[2100] w-[calc(100%-2rem)] sm:w-[460px] h-[calc(100%-2rem)] sm:h-[720px] sm:max-h-[85vh] bg-white/95 backdrop-blur-2xl rounded-[32px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-12 duration-700 border border-white/50">
          <ChatHeader onClose={() => setVisible(false)} />

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-8 bg-gradient-to-b from-slate-50/50 to-white flex flex-col gap-8 scroll-smooth custom-scrollbar"
          >
            <div className="flex flex-col gap-8 min-h-full pb-4">
              {messages.map((msg) => (
                <ChatMessage key={msg.id} {...msg} />
              ))}
              {loading && (
                <div className="self-start bg-white/80 backdrop-blur-sm p-5 px-7 rounded-[26px_26px_26px_4px] shadow-sm border border-slate-100/50 animate-pulse">
                  <div className="flex gap-2.5 items-center h-4">
                    <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:200ms]"></div>
                    <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:400ms]"></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-auto">
            <ChatInput 
              value={inputValue} 
              onChange={setInputValue} 
              onSend={handleSend} 
              loading={loading} 
            />
          </div>
        </div>
      )}
    </>
  );
}
