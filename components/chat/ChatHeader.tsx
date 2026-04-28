"use client";

import React from 'react';
import { Space, Badge, Avatar, Typography, Button } from 'antd';
import { RobotOutlined, CloseOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface ChatHeaderProps {
  onClose: () => void;
}

export default function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <div className="p-4 px-5 bg-primary text-white flex items-center justify-between">
      <Space>
        <Badge dot color="green" offset={[-2, 32]}>
          <Avatar icon={<RobotOutlined />} className="bg-white/20" />
        </Badge>
        <div>
          <Text className="!text-white !block !leading-none font-bold">Elevate AI</Text>
          <Text className="text-white/70 text-xs">Always online</Text>
        </div>
      </Space>
      <Button
        type="text"
        icon={<CloseOutlined className="text-white" />}
        onClick={onClose}
        className="hover:bg-white/10"
      />
    </div>
  );
}
