import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const SYSTEM_INSTRUCTION = `You are Elevate AI, a sophisticated and helpful personal shopping assistant for "ELEVATE", a premium lifestyle and technology store. 
Your goal is to provide expert advice on high-end gadgets and lifestyle products. 
Keep your responses professional, concise, and helpful. 
If asked about tracking, mention that users can find it in their account section. 
If asked about returns, mention the 30-day hassle-free policy. 
Always maintain a premium, high-end brand tone.`;

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ response: "API Key not configured." }, { status: 500 });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `${SYSTEM_INSTRUCTION}\n\nUser: ${message}\nAssistant:`;
    const result = await model.generateContent(prompt);
    const response = result.response.text();

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ response: "I'm sorry, I encountered an error processing your request." }, { status: 500 });
  }
}
