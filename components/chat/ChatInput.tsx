"use client";

import React from 'react';
import { Space, Tag, Input, Button } from 'antd';
import { SendOutlined, ShoppingOutlined, ReloadOutlined } from '@ant-design/icons';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: (text?: string) => void;
  loading: boolean;
}

export default function ChatInput({ value, onChange, onSend, loading }: ChatInputProps) {
  const quickActions = [
    { label: 'Track Order', icon: <ShoppingOutlined /> },
    { label: 'Return Policy', icon: <ReloadOutlined /> },
  ];

  return (
    <div className="p-4 bg-white border-t border-gray-100">
      <Space wrap className="mb-3">
        {quickActions.map(action => (
          <Tag
            key={action.label}
            className="cursor-pointer !rounded-full px-3 py-1 hover:border-primary hover:text-primary transition-all bg-gray-50 border-gray-200"
            onClick={() => onSend(action.label)}
          >
            {action.icon} {action.label}
          </Tag>
        ))}
      </Space>
      <Input
        placeholder="Ask me anything..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onPressEnter={() => onSend()}
        disabled={loading}
        suffix={
          <Button
            type="primary"
            shape="circle"
            icon={<SendOutlined />}
            onClick={() => onSend()}
            disabled={!value.trim() || loading}
            className="shadow-md"
          />
        }
        className="!rounded-full py-1.5 px-4 shadow-sm border-gray-200 focus-within:border-primary transition-all"
      />
    </div>
  );
}
