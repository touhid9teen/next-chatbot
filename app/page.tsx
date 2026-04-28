"use client";

import React from 'react';
import { Layout } from 'antd';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/layout/Hero';
import ProductGrid from '@/components/layout/ProductGrid';
import Footer from '@/components/layout/Footer';
import ChatAssistant from '@/components/ChatAssistant';

const { Content } = Layout;

export default function LandingPage() {
  return (
    <Layout className="bg-[var(--background)]">
      <Navbar />

      <Content>
        <Hero />
        <ProductGrid />
      </Content>

      <Footer />

      <ChatAssistant />

    </Layout>
  );
}
