import { GoogleGenerativeAI } from "@google/generative-ai";

const generativeAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

const sys_prompt = `You are Priora, a product intelligence engine. Analyze the feedback and return ONLY a JSON array, no markdown, no explanation, just raw and pure JSON.

Each item shld follow this exact structure:
{ "title" : "short problem title",
"priority": "high" | "medium" | "low",
"problem" : "one sentence describing the problem",
"whyItMatters" : "one sentence on impact on the business",
"recommendation" : "what to build or fix about it",
"type" : "Fix" | "Build" | "Investigate",
"evidence" : "a direct quote from the feedback",
"confidence" : "high" | "medium" | "low"
"sampleSize" : 12
}

order by priority, return 3-6 problems max, only return the json array, nthg else.`

export async function POST(req: Request) {
    const {feedback} = await req.json()
    console.log('key:', process.env.GEMINI_API_KEY)


    const model = generativeAI.getGenerativeModel({
        model: 'gemini-2.5-flash',
        systemInstruction: sys_prompt
    })
    const result = await model.generateContent(feedback)
    const text = result.response.text()
    const cleaned = text.replace(/```json|```/g, '').trim()
    const problems = JSON.parse(cleaned)

    return Response.json({problems})
}