import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { message } = await request.json();

  // Simulate AI delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Basic mock response logic
  let response = "I'm your AI Shopping Assistant. How can I help you today?";

  if (message.toLowerCase().includes('track')) {
    response = "You can track your order by entering your order ID on our 'Support' page. Would you like me to send you the link?";
  } else if (message.toLowerCase().includes('return')) {
    response = "We offer a 30-day hassle-free return policy. You can start a return from your 'Account' section.";
  } else if (message.toLowerCase().includes('hi') || message.toLowerCase().includes('hello')) {
    response = "Hello! I'm here to help you find the perfect lifestyle gadgets. What are you looking for today?";
  }

  return NextResponse.json({ response });
}
