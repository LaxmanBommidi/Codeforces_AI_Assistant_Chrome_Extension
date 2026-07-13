import { json } from "zod";
import { HintResponse } from "../types/hint";
import Problem from "../types/problem";
import generateAIResponse from "./ai.service";

export async function generateHintsService( problem : Problem ) : Promise<HintResponse> {

    const prompt = `
            You are an expert competitive programmer.
            Generate exactly three progressive hints.
            Do NOT reveal the solution.
            Should be Very short and simple to Understand.
            Problem Title: ${problem.title}
            Statement: ${problem.statement}
            Sample Input: ${problem.input}
            Sample Output: ${problem.output}
            Return ONLY valid JSON.
            {
                "hint1":"",
                "hint2":"",
                "hint3":""
            }
            Do not include markdown.
            Do not include explanation.
            Return only JSON.`;
    try{
        const response = await generateAIResponse(prompt);
        console.log(response);
        if (typeof response !== "string") {
            throw new Error("Invalid AI response");
        }
        return JSON.parse(response);
    }
    catch(error) {
        console.error(error);
        throw error;
    }
    
}