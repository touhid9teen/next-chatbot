"use client";

import React from 'react';
import { Row, Col, Card, Typography, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Image from 'next/image';

const { Title, Text } = Typography;

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

export default function ProductGrid() {
  return (
    <section className="px-[5%] py-24">
      <div className="text-center mb-16">
        <Title level={2} className="!font-extrabold !text-[40px] !mb-4">Featured Collection</Title>
        <Text className="text-gray-500 text-lg">Meticulously crafted for those who demand excellence.</Text>
      </div>

      <Row gutter={[24, 40]}>
        {products.map((product) => (
          <Col xs={24} sm={12} lg={6} key={product.id}>
            <Card
              hoverable
              className="product-card group"
              cover={
                <div className="relative h-80 bg-gray-50 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover p-5 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    {product.tag}
                  </div>
                </div>
              }
              actions={[
                <Button 
                  key="add" 
                  type="primary" 
                  block 
                  icon={<PlusOutlined />} 
                  className="!mx-3 !w-[calc(100%-24px)]"
                >
                  Add to Cart
                </Button>
              ]}
            >
              <Card.Meta
                title={<div className="text-lg font-semibold">{product.name}</div>}
                description={
                  <div className="mt-2">
                    <Title level={4} className="!m-0 !text-primary">{product.price}</Title>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
