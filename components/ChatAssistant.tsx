"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FloatButton, Card, Typography } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import ChatHeader from './chat/ChatHeader';
import ChatMessage from './chat/ChatMessage';
import ChatInput from './chat/ChatInput';

const { Text } = Typography;

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
      <div className={`chat-trigger ${!visible ? 'pulse' : ''}`} style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 2000 }}>
        {!visible && (
          <div style={{
            position: 'absolute',
            bottom: '70px',
            right: 0,
            background: 'white',
            padding: '8px 16px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            whiteSpace: 'nowrap',
            fontSize: '12px',
            fontWeight: 600,
            animation: 'fadeIn 0.5s ease-out'
          }}>
            👋 Need help finding something?
            <div style={{
              position: 'absolute',
              bottom: '-6px',
              right: '24px',
              width: '12px',
              height: '12px',
              background: 'white',
              transform: 'rotate(45deg)'
            }} />
          </div>
        )}
        <FloatButton
          icon={<MessageOutlined />}
          type="primary"
          style={{ position: 'static', width: 60, height: 60 }}
          onClick={() => setVisible(!visible)}
          badge={{ dot: true, color: 'green' }}
        />
      </div>

      {visible && (
        <Card
          className="chat-card"
          style={{
            position: 'fixed',
            right: 24,
            bottom: 100,
            zIndex: 2000,
            boxShadow: '0 12px 48px rgba(0,0,0,0.15)',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            padding: 0,
            transition: 'all 0.3s ease'
          }}
          bodyStyle={{ padding: 0, height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <ChatHeader onClose={() => setVisible(false)} />

          <div
            ref={scrollRef}
            style={{
              flex: 1,
              padding: '20px',
              overflowY: 'auto',
              background: '#f9f9f9',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            {messages.map((msg) => (
              <ChatMessage key={msg.id} {...msg} />
            ))}
            {loading && (
              <div style={{ alignSelf: 'flex-start', background: 'white', padding: '12px 16px', borderRadius: '18px 18px 18px 0', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <Text italic type="secondary">typing...</Text>
              </div>
            )}
          </div>

          <ChatInput 
            value={inputValue} 
            onChange={setInputValue} 
            onSend={handleSend} 
            loading={loading} 
          />
        </Card>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .pulse {
          animation: pulse-animation 2s infinite;
          border-radius: 50%;
        }
        @keyframes pulse-animation {
          0% { box-shadow: 0 0 0 0px rgba(22, 119, 255, 0.4); }
          100% { box-shadow: 0 0 0 20px rgba(22, 119, 255, 0); }
        }
        .chat-trigger {
          transition: all 0.3s ease;
          border-radius: 50%;
        }
        .chat-trigger:hover {
          transform: scale(1.05);
        }
        .chat-card {
          width: 380px;
          height: 550px;
        }
        @media (max-width: 768px) {
          .chat-card {
            width: calc(100vw - 40px) !important;
            height: 60vh !important;
            right: 20px !important;
            bottom: 90px !important;
          }
          .chat-trigger {
            right: 20px !important;
            bottom: 20px !important;
          }
        }
      `}</style>
    </>
  );
}
