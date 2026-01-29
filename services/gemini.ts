
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function getLocationProphecy(locationName: string, arcana: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an occult guide to New Orleans. Write a short, cryptic, poetic "spiritual reading" (2 sentences max) for a tourist visiting ${locationName}, which is associated with ${arcana} Tarot card. Use witchy, glitchy language.`,
      config: {
        temperature: 0.9,
        topP: 0.95,
      }
    });
    return response.text || "The spirits are silent, but the neon hums your name.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The veil is thin; seek the truth within the shadows.";
  }
}
