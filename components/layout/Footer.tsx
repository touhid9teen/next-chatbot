"use client";

import React from 'react';
import { Layout, Row, Col, Typography, Space, Divider, Input, Button } from 'antd';
import { FacebookFilled, TwitterCircleFilled, InstagramFilled, GithubFilled } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Title, Text, Paragraph } = Typography;

export default function Footer() {
  return (
    <AntFooter className="footer bg-[#f9f9f9] pt-20 pb-10">
      <Row gutter={[48, 48]} className="px-[5%]">
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
      
      <div className="px-[5%] pt-20">
        <section className="p-16 bg-primary text-white rounded-[32px] text-center">
          <Title level={2} className="!text-white !text-[32px] !font-extrabold">Join the Elite Club</Title>
          <Paragraph className="!text-white/80 !text-base !mb-8">
            Get early access to new drops and exclusive member-only pricing.
          </Paragraph>
          <Space direction="vertical" size="middle" className="w-full max-w-[400px]">
            <Input
              size="large"
              placeholder="Enter your email"
              className="!rounded-xl !h-14"
              suffix={<Button type="primary" className="!rounded-lg">Subscribe</Button>}
            />
          </Space>
        </section>
      </div>

      <Divider className="my-10" />
      <div className="text-center text-gray-400">
        © 2024 Elevate. All rights reserved. Made with excellence.
      </div>
    </AntFooter>
  );
}
