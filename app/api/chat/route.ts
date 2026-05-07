import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

import { shopData } from '@/lib/shopData';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const SYSTEM_INSTRUCTION = `You are Elevate AI, the official personal shopping assistant for ${shopData.name}. 
Store Description: ${shopData.description}
Slogan: ${shopData.slogan}

YOUR KNOWLEDGE BASE:
1. PRODUCTS & CATEGORIES:
${shopData.categories.map(c => `- ${c.name}: ${c.products.join(', ')}`).join('\n')}

2. FEATURED PRODUCTS DETAILS:
${shopData.featuredProducts.map(p => `- ${p.name} (${p.price}): ${p.description} Features: ${p.features.join(', ')}`).join('\n')}

3. POLICIES:
- Returns: ${shopData.policies.returns.period}. ${shopData.policies.returns.condition}
- Shipping: Standard: ${shopData.policies.shipping.standard}. Express: ${shopData.policies.shipping.express}
- Support: ${shopData.policies.support.hours}. Email: ${shopData.policies.support.email}
- Tracking: ${shopData.policies.support.tracking}

YOUR GUIDELINES:
- Tone: ${shopData.brandTone.join(', ')}. Always maintain a premium, high-end brand tone.
- Style: Keep responses professional, concise, and helpful. 
- Goal: Provide expert advice on high-end gadgets and help users find the perfect product.
- Limitations: If asked about something outside of our inventory, politely mention that we specialize in premium lifestyle tech and suggest a similar product from our catalog if applicable.`;

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ response: "API Key not configured." }, { status: 500 });
    }

    // Using gemini-flash-latest as verified by successful curl command
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const prompt = `${SYSTEM_INSTRUCTION}\n\nUser: ${message}\nAssistant:`;
    const result = await model.generateContent(prompt);
    const response = result.response.text();

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ response: "I'm sorry, I encountered an error processing your request." }, { status: 500 });
  }
}
