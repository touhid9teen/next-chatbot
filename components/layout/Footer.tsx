"use client";

import React from 'react';
import { Layout, Row, Col, Typography, Space, Divider, Input, Button } from 'antd';
import { FacebookFilled, TwitterCircleFilled, InstagramFilled, GithubFilled } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Title, Text, Paragraph } = Typography;

export default function Footer() {
  return (
    <AntFooter className="footer bg-white pt-16 md:pt-20 pb-10">
      <Row gutter={[{ xs: 24, sm: 32, lg: 48 }, { xs: 32, sm: 48 }]} className="px-4 md:px-[5%]">
        <Col xs={24} sm={12} lg={6}>
          <Title level={4} className="!mb-6">ELEVATE</Title>
          <Paragraph className="text-gray-500">
            Defining the future of premium lifestyle tech since 2024. Quality, design, and innovation in every piece.
          </Paragraph>
          <Space size="middle" className="text-xl mt-4">
            <FacebookFilled className="cursor-pointer hover:text-primary transition-colors" />
            <TwitterCircleFilled className="cursor-pointer hover:text-primary transition-colors" />
            <InstagramFilled className="cursor-pointer hover:text-primary transition-colors" />
            <GithubFilled className="cursor-pointer hover:text-primary transition-colors" />
          </Space>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Title level={4} className="!mb-6">About</Title>
          <Space direction="vertical" size="small">
            <Text className="text-gray-500 cursor-pointer hover:text-primary transition-colors">Our Story</Text>
            <Text className="text-gray-500 cursor-pointer hover:text-primary transition-colors">Careers</Text>
            <Text className="text-gray-500 cursor-pointer hover:text-primary transition-colors">Press Kit</Text>
            <Text className="text-gray-500 cursor-pointer hover:text-primary transition-colors">Contact Us</Text>
          </Space>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Title level={4} className="!mb-6">Support</Title>
          <Space direction="vertical" size="small">
            <Text className="text-gray-500 cursor-pointer hover:text-primary transition-colors">Help Center</Text>
            <Text className="text-gray-500 cursor-pointer hover:text-primary transition-colors">Shipping Info</Text>
            <Text className="text-gray-500 cursor-pointer hover:text-primary transition-colors">Returns</Text>
            <Text className="text-gray-500 cursor-pointer hover:text-primary transition-colors">Order Status</Text>
          </Space>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Title level={4} className="!mb-6">Policy</Title>
          <Space direction="vertical" size="small">
            <Text className="text-gray-500 cursor-pointer hover:text-primary transition-colors">Privacy Policy</Text>
            <Text className="text-gray-500 cursor-pointer hover:text-primary transition-colors">Terms of Service</Text>
            <Text className="text-gray-500 cursor-pointer hover:text-primary transition-colors">Cookie Policy</Text>
            <Text className="text-gray-500 cursor-pointer hover:text-primary transition-colors">Sustainability</Text>
          </Space>
        </Col>
      </Row>
      
      <div className="px-4 md:px-[5%] pt-16 md:pt-20">
        <section className="p-8 md:p-16 bg-white border border-gray-200 text-gray-900 rounded-[24px] md:rounded-[32px] text-center shadow-sm">
          <Title level={2} className="!text-gray-900 !text-2xl md:!text-[32px] !font-extrabold">Join the Elite Club</Title>
          <Paragraph className="!text-gray-500 !text-sm md:!text-base !mb-8">
            Get early access to new drops and exclusive member-only pricing.
          </Paragraph>
          <div className="w-full max-w-[500px] mx-auto">
            <div className="hidden sm:flex gap-3">
              <Input
                size="large"
                placeholder="Enter your email"
                className="!rounded-xl !h-14 flex-1"
              />
              <Button type="primary" size="large" className="!rounded-xl !h-14 !font-bold !px-8">
                Subscribe
              </Button>
            </div>
            <div className="sm:hidden flex flex-col gap-3">
              <Input
                size="large"
                placeholder="Enter your email"
                className="!rounded-xl !h-14"
              />
              <Button type="primary" size="large" className="w-full !rounded-xl !h-14 !font-bold">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Divider className="my-10" />
      <div className="text-center text-gray-400">
        © 2024 Elevate. All rights reserved. Made with excellence.
      </div>
    </AntFooter>
  );
}
