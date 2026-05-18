import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are India's most knowledgeable welfare navigator. Your job is to analyze a citizen's personal profile and return a precise, ranked list of government welfare schemes they are eligible for — both Central and State level.

You must:
1. Match schemes to the user's profile with high accuracy
2. Explain eligibility in plain, simple language (Class 6 reading level)
3. Give exact action steps in chronological order
4. Predict total lifetime value of all matched schemes in INR
5. Flag schemes with upcoming deadlines or sunset dates
6. Identify "cascade chains" — where enrolling in one scheme unlocks another
7. Identify what documents are missing and how to obtain them
8. NEVER use government jargon. No "beneficiaries", "nodal agencies", "convergence".
9. Respond in the user's preferred language.
10. Return output in valid JSON matching the schema provided.

Scheme knowledge base: Central schemes include PM-KISAN, PMFBY, PMAY-G, PMAY-U, Ayushman Bharat, MGNREGA, PM Ujjwala, PM Mudra Yojana, PMEGP, Sukanya Samriddhi, PMJJBY, PMSBY, Atal Pension Yojana, PM Vaya Vandana, PM Vishwakarma, Stand Up India, National Scholarship Portal schemes, BOCW welfare, e-Shram, PM SVANidhi, PM Garib Kalyan Anna Yojana, Jan Dhan Yojana, PM Matru Vandana Yojana, Kisan Credit Card, and all state-specific schemes for the user's state.`;

export async function POST(request) {
  try {
    const { profile, language = 'en' } = await request.json();
    
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const userPrompt = `Analyze this citizen profile and return scheme recommendations as JSON.
Language preference: ${language === 'hi' ? 'Hindi' : 'English'}

Profile: ${JSON.stringify(profile)}

Return JSON with this exact structure:
{
  "archetype": { "id": "string", "label": "string", "description": "string" },
  "totalProjectedValue": number,
  "projectionYears": 5,
  "schemes": [{
    "id": "string",
    "name": "string",
    "ministry": "string",
    "level": "Central" or "State",
    "type": "Now" or "Soon" or "Future",
    "timelineMonths": number,
    "projectedValue": number,
    "eligibilityScore": number (0-100),
    "eligibilityReason": "string",
    "plainDescription": "string",
    "missingDocuments": ["string"],
    "actionSteps": [{ "step": number, "action": "string", "timeRequired": "string" }],
    "deadline": "string or null",
    "cascadesTo": ["string"],
    "sunsetRisk": { "exists": false, "description": "", "confidence": 0 }
  }],
  "documentGaps": [{ "document": "string", "howToGet": "string", "timeRequired": "string", "unlocksSchemes": ["string"] }],
  "cascadeChains": [{ "parent": "string", "child": "string", "childName": "string", "relationship": "string" }],
  "sunsetAlerts": [{ "schemeName": "string", "alert": "string", "deadline": "string", "confidence": number }]
}

Return ONLY valid JSON, no markdown or explanation.`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 4000,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: userPrompt }]
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Claude API error:', err);
      return NextResponse.json({ error: 'AI service error' }, { status: 502 });
    }

    const data = await response.json();
    const text = data.content?.[0]?.text || '';
    
    // Parse JSON from response
    let results;
    try {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      results = jsonMatch ? JSON.parse(jsonMatch[0]) : JSON.parse(text);
    } catch (e) {
      console.error('JSON parse error:', e);
      return NextResponse.json({ error: 'Failed to parse AI response' }, { status: 500 });
    }

    return NextResponse.json(results);
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
