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
      <div className="fixed right-6 bottom-6 z-[2000]">
        {!visible && (
          <div className="absolute bottom-[70px] right-0 bg-white px-4 py-2 rounded-xl shadow-lg whitespace-nowrap text-xs font-semibold animate-in fade-in slide-in-from-bottom-2 duration-300">
            👋 Need help finding something?
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white transform rotate-45" />
          </div>
        )}
        <button
          onClick={() => setVisible(!visible)}
          className={`relative flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-transform hover:scale-105 active:scale-95 duration-200 ${
            !visible ? 'animate-bounce' : ''
          }`}
        >
          {visible ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          {!visible && (
            <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500 border-2 border-white"></span>
            </span>
          )}
        </button>
      </div>

      {visible && (
        <div className="fixed inset-x-0 bottom-0 sm:inset-auto sm:right-6 sm:bottom-24 z-[2000] w-full sm:w-[380px] h-[100dvh] sm:h-[600px] sm:max-h-[80vh] bg-white sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 sm:slide-in-from-bottom-0 duration-300 border border-gray-100">
          <ChatHeader onClose={() => setVisible(false)} />

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4"
          >
            {messages.map((msg) => (
              <ChatMessage key={msg.id} {...msg} />
            ))}
            {loading && (
              <div className="self-start bg-white p-3 px-4 rounded-[18px_18px_18px_0] shadow-sm border border-gray-100">
                <div className="flex gap-1.5 items-center h-4">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
          </div>

          <ChatInput 
            value={inputValue} 
            onChange={setInputValue} 
            onSend={handleSend} 
            loading={loading} 
          />
        </div>
      )}
    </>
  );
}
