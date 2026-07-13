import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv'
import { env } from "./env";

dotenv.config();

export const gemini = new GoogleGenAI( {
    apiKey : env.GEMINI_API_KEY,
});