"use client";

import React, { useState, useEffect } from 'react';
import {
  Layout,
  Input,
  Badge,
  Button,
  Row,
  Col,
  Card,
  Typography,
  Space,
  Divider
} from 'antd';
import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  FacebookFilled,
  TwitterCircleFilled,
  InstagramFilled,
  GithubFilled,
  ArrowRightOutlined,
  PlusOutlined
} from '@ant-design/icons';
import Image from 'next/image';
import ChatAssistant from '@/components/ChatAssistant';


const { Header, Content, Footer: AntFooter } = Layout;
const { Title, Text, Paragraph } = Typography;

const products = [
  {
    id: 1,
    name: "Aura Pods Pro",
    price: "$249.00",
    image: "/product1.png",
    tag: "New Arrival"
  },
  {
    id: 2,
    name: "Stellar Watch Gen 3",
    price: "$399.00",
    image: "/product2.png",
    tag: "Best Seller"
  },
  {
    id: 3,
    name: "Lumina Tablet 12",
    price: "$899.00",
    image: "/product3.png",
    tag: "Trending"
  },
  {
    id: 4,
    name: "Aura Pods Mini",
    price: "$129.00",
    image: "/product1.png",
    tag: "Popular"
  }
];

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout style={{ background: 'var(--background)' }}>
      {/* Navbar */}
      <Header className={`glass-nav ${scrolled ? 'scrolled' : ''}`} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 5%',
        height: 80,
        zIndex: 1000,
        background: scrolled ? 'var(--glass-bg)' : 'transparent',
        color: '#000000',
        transition: 'all 0.3s ease',
        lineHeight: '80px'
      }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '40px', flex: 1 }}>
          <div style={{
            fontSize: '24px',
            fontWeight: 800,
            letterSpacing: '-1px',
            color: 'var(--primary)',
            transition: 'color 0.3s ease'
          }}>
            ELEVATE
          </div>
          <Input
            prefix={<SearchOutlined style={{ color: '#8c8c8c' }} />}
            placeholder="Search products..."
            variant="borderless"
            style={{
              width: 300,
              borderRadius: '20px',
              background: scrolled ? 'rgba(0,0,0,0.05)' : 'rgba(0,0,0,0.03)',
              color: '#000000',
              height: '40px',
              transition: 'all 0.3s ease'
            }}
            className="hidden-mobile search-input"
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <Space size="large">
            <Button
              type="text"
              icon={<UserOutlined style={{ fontSize: '20px' }} />}
              style={{ color: '#000000', transition: 'color 0.3s ease' }}
            >
              Account
            </Button>
            <Badge count={3} offset={[5, 0]}>
              <Button
                type="text"
                icon={<ShoppingCartOutlined style={{ fontSize: '20px' }} />}
                style={{ color: '#000000', transition: 'color 0.3s ease' }}
              >
                Cart
              </Button>
            </Badge>

          </Space>
        </div>

      </Header>


      <Content>
        {/* Hero Section */}
        <section className="hero-gradient" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 5% 60px' }}>
          <Row gutter={[48, 48]} align="middle" style={{ width: '100%' }}>
            <Col xs={24} lg={12}>
              <div style={{ maxWidth: 600 }}>
                <Text strong style={{ color: 'var(--primary)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px', display: 'block' }}>
                  Next Generation Tech
                </Text>
                <Title level={1} style={{ fontSize: 'clamp(48px, 8vw, 72px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-2px', color: '#171717' }}>
                  Elevate Your <span style={{ color: 'var(--primary)' }}>Lifestyle</span>
                </Title>
                <Paragraph style={{ fontSize: '18px', color: '#666', marginBottom: '40px', lineHeight: 1.6 }}>
                  Experience the pinnacle of design and technology. Our curated collection brings you the future of lifestyle gadgets today.
                </Paragraph>


                <Space size="large">
                  <Button type="primary" size="large" style={{ height: 56, padding: '0 40px', fontSize: '18px' }} icon={<ArrowRightOutlined />}>
                    Shop Now
                  </Button>
                  <Button size="large" style={{ height: 56, padding: '0 32px', fontSize: '18px' }}>
                    View Lookbook
                  </Button>
                </Space>
              </div>
            </Col>
            <Col xs={24} lg={12} style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="animate-float" style={{ position: 'relative', width: '100%', maxWidth: 500, aspectRatio: '1/1' }}>
                <Image
                  src="/hero.png"
                  alt="Premium Product"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </Col>
          </Row>
        </section>

        {/* Product Grid */}
        <section style={{ padding: '100px 5%' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <Title level={2} style={{ fontWeight: 800, fontSize: '40px', marginBottom: '16px' }}>Featured Collection</Title>
            <Text style={{ color: '#666', fontSize: '18px' }}>Meticulously crafted for those who demand excellence.</Text>
          </div>

          <Row gutter={[24, 40]}>
            {products.map((product) => (
              <Col xs={24} sm={12} lg={6} key={product.id}>
                <Card
                  hoverable
                  className="product-card"
                  cover={
                    <div style={{ position: 'relative', height: 320, background: '#f5f5f5', overflow: 'hidden' }}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        style={{ objectFit: 'cover', padding: '20px' }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        background: 'white',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: 600,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                      }}>
                        {product.tag}
                      </div>
                    </div>
                  }
                  actions={[
                    <Button key="add" type="primary" block icon={<PlusOutlined />} style={{ margin: '0 12px', width: 'calc(100% - 24px)' }}>
                      Add to Cart
                    </Button>
                  ]}
                >
                  <Card.Meta
                    title={<div style={{ fontSize: '18px', fontWeight: 600 }}>{product.name}</div>}
                    description={
                      <div style={{ marginTop: '8px' }}>
                        <Title level={4} style={{ margin: 0, color: 'var(--primary)' }}>{product.price}</Title>
                      </div>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* CTA Section */}
        <section style={{ padding: '100px 5%', background: 'var(--primary)', color: 'white', margin: '0 5%', borderRadius: '32px', textAlign: 'center', marginBottom: '100px' }}>
          <Title level={2} style={{ color: 'white', fontSize: '40px', fontWeight: 800 }}>Join the Elite Club</Title>
          <Paragraph style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', marginBottom: '32px' }}>
            Get early access to new drops and exclusive member-only pricing.
          </Paragraph>
          <Space direction="vertical" size="middle" style={{ width: '100%', maxWidth: 400 }}>
            <Input
              size="large"
              placeholder="Enter your email"
              style={{ borderRadius: '12px', height: 56 }}
              suffix={<Button type="primary" style={{ borderRadius: '8px' }}>Subscribe</Button>}
            />
          </Space>
        </section>
      </Content>

      <AntFooter className="footer">
        <Row gutter={[48, 48]} style={{ padding: '0 5%' }}>
          <Col xs={24} sm={12} lg={6}>
            <Title level={4} style={{ marginBottom: '24px' }}>ELEVATE</Title>
            <Paragraph style={{ color: '#666' }}>
              Defining the future of premium lifestyle tech since 2024. Quality, design, and innovation in every piece.
            </Paragraph>
            <Space size="middle" style={{ fontSize: '20px', marginTop: '16px' }}>
              <FacebookFilled style={{ cursor: 'pointer' }} />
              <TwitterCircleFilled style={{ cursor: 'pointer' }} />
              <InstagramFilled style={{ cursor: 'pointer' }} />
              <GithubFilled style={{ cursor: 'pointer' }} />
            </Space>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Title level={4} style={{ marginBottom: '24px' }}>About</Title>
            <Space direction="vertical" size="small">
              <Text style={{ color: '#666', cursor: 'pointer' }}>Our Story</Text>
              <Text style={{ color: '#666', cursor: 'pointer' }}>Careers</Text>
              <Text style={{ color: '#666', cursor: 'pointer' }}>Press Kit</Text>
              <Text style={{ color: '#666', cursor: 'pointer' }}>Contact Us</Text>
            </Space>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Title level={4} style={{ marginBottom: '24px' }}>Support</Title>
            <Space direction="vertical" size="small">
              <Text style={{ color: '#666', cursor: 'pointer' }}>Help Center</Text>
              <Text style={{ color: '#666', cursor: 'pointer' }}>Shipping Info</Text>
              <Text style={{ color: '#666', cursor: 'pointer' }}>Returns</Text>
              <Text style={{ color: '#666', cursor: 'pointer' }}>Order Status</Text>
            </Space>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Title level={4} style={{ marginBottom: '24px' }}>Policy</Title>
            <Space direction="vertical" size="small">
              <Text style={{ color: '#666', cursor: 'pointer' }}>Privacy Policy</Text>
              <Text style={{ color: '#666', cursor: 'pointer' }}>Terms of Service</Text>
              <Text style={{ color: '#666', cursor: 'pointer' }}>Cookie Policy</Text>
              <Text style={{ color: '#666', cursor: 'pointer' }}>Sustainability</Text>
            </Space>
          </Col>
        </Row>
        <Divider style={{ margin: '40px 0' }} />
        <div style={{ textAlign: 'center', color: '#999' }}>
          © 2024 Elevate. All rights reserved. Made with excellence.
        </div>
      </AntFooter>

      <ChatAssistant />

      <style jsx global>{`

        @media (max-width: 768px) {
          .hidden-mobile {
            display: none !important;
          }
        }
        .glass-nav {
          background: transparent !important;
          color: #000000 !important;
        }
        .glass-nav.scrolled {
          background: var(--glass-bg) !important;
          backdrop-filter: blur(10px) !important;
          -webkit-backdrop-filter: blur(10px) !important;
        }
        .glass-nav .ant-btn-text {
          color: #000000 !important;
        }

        .search-input input::placeholder {
          color: rgba(0,0,0,0.45) !important;
        }
        .search-input input {
          color: #000000 !important;
        }
      `}</style>



    </Layout>
  );
}
