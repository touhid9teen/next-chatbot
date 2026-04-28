"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  FloatButton, 
  Card, 
  Input, 
  Button, 
  Avatar, 
  Badge, 
  List, 
  Typography, 
  Space,
  Divider,
  Tag
} from 'antd';
import { 
  MessageOutlined, 
  SendOutlined, 
  CloseOutlined, 
  RobotOutlined,
  UserOutlined,
  ShoppingOutlined,
  ReloadOutlined
} from '@ant-design/icons';

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

  const quickActions = [
    { label: 'Track Order', icon: <ShoppingOutlined /> },
    { label: 'Return Policy', icon: <ReloadOutlined /> },
  ];

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
          style={{
            position: 'fixed',
            right: 24,
            bottom: 100,
            width: 380,
            height: 550,
            zIndex: 2000,
            boxShadow: '0 12px 48px rgba(0,0,0,0.15)',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            padding: 0
          }}
          bodyStyle={{ padding: 0, height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          {/* Header */}
          <div style={{ 
            padding: '16px 20px', 
            background: 'var(--primary)', 
            color: 'white', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between' 
          }}>
            <Space>
              <Badge dot color="green" offset={[-2, 32]}>
                <Avatar icon={<RobotOutlined />} style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
              </Badge>
              <div>
                <Text strong style={{ color: 'white', display: 'block', lineHeight: 1.2 }}>Elevate AI</Text>
                <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>Always online</Text>
              </div>
            </Space>
            <Button 
              type="text" 
              icon={<CloseOutlined style={{ color: 'white' }} />} 
              onClick={() => setVisible(false)} 
            />
          </div>

          {/* Messages Area */}
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
              <div 
                key={msg.id} 
                style={{ 
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '80%'
                }}
              >
                <div style={{ 
                  padding: '12px 16px', 
                  borderRadius: msg.sender === 'user' ? '18px 18px 0 18px' : '18px 18px 18px 0',
                  background: msg.sender === 'user' ? 'var(--primary)' : 'white',
                  color: msg.sender === 'user' ? 'white' : '#333',
                  boxShadow: msg.sender === 'ai' ? '0 2px 8px rgba(0,0,0,0.05)' : 'none',
                  fontSize: '14px',
                  lineHeight: 1.5
                }}>
                  {msg.text}
                </div>
                <Text type="secondary" style={{ fontSize: '10px', marginTop: '4px', display: 'block', textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </Text>
              </div>
            ))}
            {loading && (
              <div style={{ alignSelf: 'flex-start', background: 'white', padding: '12px 16px', borderRadius: '18px 18px 18px 0', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <Text italic type="secondary">typing...</Text>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div style={{ padding: '16px', background: 'white' }}>
            <Space wrap style={{ marginBottom: '12px' }}>
              {quickActions.map(action => (
                <Tag 
                  key={action.label} 
                  style={{ cursor: 'pointer', borderRadius: '12px', padding: '4px 12px' }}
                  onClick={() => handleSend(action.label)}
                >
                  {action.icon} {action.label}
                </Tag>
              ))}
            </Space>
            <Input
              placeholder="Ask me anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onPressEnter={() => handleSend()}
              suffix={
                <Button 
                  type="primary" 
                  shape="circle" 
                  icon={<SendOutlined />} 
                  onClick={() => handleSend()} 
                  disabled={!inputValue.trim()}
                />
              }
              style={{ borderRadius: '24px', padding: '4px 4px 4px 16px' }}
            />
          </div>
        </Card>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .pulse {
          animation: pulse-animation 2s infinite;
        }
        @keyframes pulse-animation {
          0% { box-shadow: 0 0 0 0px rgba(22, 119, 255, 0.4); }
          100% { box-shadow: 0 0 0 20px rgba(22, 119, 255, 0); }
        }
        .chat-trigger {
          transition: all 0.3s ease;
        }
        .chat-trigger:hover {
          transform: scale(1.05);
        }
      `}</style>
    </>

  );
}
