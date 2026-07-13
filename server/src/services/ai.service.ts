import { gemini } from "../config/gemini";


export default async function generateAIResponse(prompt : string) {
    const response = await gemini.models.generateContent({
        model : "gemini-3.1-flash-lite",
        contents: prompt,
    });
    return response.text;
}