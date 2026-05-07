"use client";

import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Image from 'next/image';

const { Title, Text, Paragraph } = Typography;

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center px-6 sm:px-12 md:px-[8%] lg:px-[12%] pt-32 pb-20 md:pt-40 md:pb-32">
      <Row gutter={[{ xs: 16, sm: 24, md: 32, lg: 48 }, { xs: 32, sm: 48 }]} align="middle" className="w-full max-w-[1400px]">
        <Col xs={24} lg={12} className="flex flex-col justify-center items-center lg:items-start lg:pr-16 xl:pr-24">
          <div className="max-w-[640px] text-center lg:text-left mb-12 lg:mb-0">
            <Text className="font-bold text-primary tracking-[4px] uppercase mb-4 block animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
              Next Generation Tech
            </Text>
            <Title 
              level={1} 
              className="!text-[clamp(36px,8vw,72px)] !font-extrabold !leading-[1.1] !mb-8 !tracking-[-2px] !text-[#171717] animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]"
            >
              Elevate Your <span className="text-primary">Lifestyle</span>
            </Title>
            <Paragraph className="!text-lg md:!text-xl !text-gray-500 !mb-12 !leading-relaxed animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
              Experience the pinnacle of design and technology. Our curated collection brings you the future of lifestyle gadgets today.
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
              <Button 
                type="primary" 
                size="large" 
                className="!h-16 !px-12 !text-lg w-full sm:w-auto rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-105 transition-all duration-300" 
                icon={<ArrowRightOutlined />}
              >
                Shop Now
              </Button>
              <Button 
                size="large" 
                className="!h-16 !px-10 !text-lg w-full sm:w-auto rounded-full border-2 border-slate-100 hover:border-primary/20 hover:bg-slate-50 transition-all duration-300"
              >
                View Lookbook
              </Button>
            </div>
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
