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
      className={`glass-nav fixed top-0 left-0 w-full flex items-center justify-center px-6 sm:px-12 md:px-[8%] lg:px-[12%] h-20 z-[1000] border-none leading-[80px] transition-all duration-300 ${scrolled ? 'scrolled bg-[var(--glass-bg)] shadow-sm' : 'bg-transparent'}`}
    >
      <div className="flex items-center justify-between w-full max-w-[1400px]">
        <div className="flex items-center gap-4 flex-1">
          <div className="text-xl md:text-2xl font-extrabold tracking-tighter text-primary transition-colors duration-300">
            ELEVATE
          </div>
          <div className="relative flex-1 md:flex-none">
            <Input
              prefix={<SearchOutlined className="text-slate-400 mr-1" />}
              placeholder="Search products..."
              suffix={
                <div className="hidden lg:flex items-center gap-1 px-1.5 py-0.5 rounded border border-slate-200 bg-slate-50 text-[10px] font-medium text-slate-400 select-none">
                  <span className="text-[12px]">⌘</span>K
                </div>
              }
              className="flex w-full max-w-[160px] md:max-w-[280px] lg:max-w-[400px] rounded-xl h-10 transition-all duration-300 bg-white border border-slate-200 hover:border-primary/50 hover:shadow-sm focus:border-primary focus:shadow-[0_0_0_4px_rgba(22,119,255,0.08)] text-slate-700 font-medium placeholder:text-slate-400 placeholder:font-normal"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          <Space size={scrolled ? "small" : "middle"}>
            <Button
              type="text"
              icon={<UserOutlined className="text-base md:text-xl" />}
              className="text-black transition-colors duration-300 flex items-center px-1 md:px-2"
            >
              <span className="hidden md:inline">Account</span>
            </Button>
            <Badge count={3} offset={[5, 0]}>
              <Button
                type="text"
                icon={<ShoppingCartOutlined className="text-lg md:text-xl" />}
                className="text-black transition-colors duration-300 flex items-center"
              >
                <span className="hidden md:inline">Cart</span>
              </Button>
            </Badge>
          </Space>
        </div>
      </div>
    </Header>
  );
}
