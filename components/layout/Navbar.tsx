"use client";

import React, { useState, useEffect } from 'react';
import { Layout, Input, Badge, Button, Space } from 'antd';
import { SearchOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Header } = Layout;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Header 
      className={`glass-nav fixed top-0 left-0 w-full flex items-center justify-between px-[5%] h-20 z-[1000] border-none leading-[80px] transition-all duration-300 ${scrolled ? 'scrolled bg-[var(--glass-bg)] shadow-sm' : 'bg-transparent'}`}
    >
      <div className="flex items-center gap-10 flex-1">
        <div className="text-2xl font-extrabold tracking-tighter text-primary transition-colors duration-300">
          ELEVATE
        </div>
        <Input
          prefix={<SearchOutlined className="text-gray-400" />}
          placeholder="Search products..."
          variant="borderless"
          className={`hidden-mobile w-[300px] rounded-full h-10 transition-all duration-300 ${scrolled ? 'bg-black/5' : 'bg-black/10'} text-black`}
        />
      </div>

      <div className="flex items-center gap-6">
        <Space size="large">
          <Button
            type="text"
            icon={<UserOutlined className="text-xl" />}
            className="text-black transition-colors duration-300"
          >
            Account
          </Button>
          <Badge count={3} offset={[5, 0]}>
            <Button
              type="text"
              icon={<ShoppingCartOutlined className="text-xl" />}
              className="text-black transition-colors duration-300"
            >
              Cart
            </Button>
          </Badge>
        </Space>
      </div>
    </Header>
  );
}
