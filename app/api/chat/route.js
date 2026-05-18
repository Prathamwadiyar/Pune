import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are a friendly, knowledgeable welfare advisor for Indian citizens. You help people understand government welfare schemes in plain, simple language.

Rules:
1. Always respond in the user's language
2. Use simple words (Class 6 reading level)
3. Never use government jargon like "beneficiary", "nodal agency", "convergence"
4. Be warm, encouraging, and practical
5. If the user asks about a specific scheme, give exact steps to apply
6. If the user updates their profile info, acknowledge it
7. Keep responses concise but complete`;

export async function POST(request) {
  try {
    const { messages, profile, language = 'en' } = await request.json();
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const systemWithContext = `${SYSTEM_PROMPT}\n\nUser's language: ${language === 'hi' ? 'Hindi' : 'English'}\nUser profile: ${JSON.stringify(profile || {})}`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 2000,
        system: systemWithContext,
        messages: messages.map(m => ({ role: m.role, content: m.content }))
      })
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'AI service error' }, { status: 502 });
    }

    const data = await response.json();
    const text = data.content?.[0]?.text || 'Sorry, I could not generate a response.';
    return NextResponse.json({ response: text });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
