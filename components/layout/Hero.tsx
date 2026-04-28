"use client";

import React from 'react';
import { Row, Col, Typography, Button, Space } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Image from 'next/image';

const { Title, Text, Paragraph } = Typography;

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center px-[5%] py-32 lg:py-16">
      <Row gutter={[48, 48]} align="middle" className="w-full">
        <Col xs={24} lg={12}>
          <div className="max-w-[600px]">
            <Text className="font-bold text-primary tracking-[4px] uppercase mb-4 block">
              Next Generation Tech
            </Text>
            <Title 
              level={1} 
              className="!text-[clamp(48px,8vw,72px)] !font-extrabold !leading-[1.1] !mb-6 !tracking-[-2px] !text-[#171717]"
            >
              Elevate Your <span className="text-primary">Lifestyle</span>
            </Title>
            <Paragraph className="!text-lg !text-gray-500 !mb-10 !leading-relaxed">
              Experience the pinnacle of design and technology. Our curated collection brings you the future of lifestyle gadgets today.
            </Paragraph>
            <Space size="large">
              <Button 
                type="primary" 
                size="large" 
                className="!h-14 !px-10 !text-lg" 
                icon={<ArrowRightOutlined />}
              >
                Shop Now
              </Button>
              <Button 
                size="large" 
                className="!h-14 !px-8 !text-lg"
              >
                View Lookbook
              </Button>
            </Space>
          </div>
        </Col>
        <Col xs={24} lg={12} className="flex justify-center">
          <div className="animate-float relative w-full max-w-[500px] aspect-square">
            <Image
              src="/hero.png"
              alt="Premium Product"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Col>
      </Row>
    </section>
  );
}
