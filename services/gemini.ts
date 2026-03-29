
import { GoogleGenAI } from "@google/genai";

const getAI = () => {
  const apiKey = process.env.GEMINI_API_KEY || "";
  return apiKey ? new GoogleGenAI({ apiKey }) : null;
};

export async function getLocationProphecy(locationName: string, arcana: string): Promise<string> {
  const ai = getAI();
  if (!ai) return "The spirits are silent, but the neon hums your name.";
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an occult guide to New Orleans. Write a short, cryptic, poetic "spiritual reading" (2 sentences max) for a tourist visiting ${locationName}, which is associated with ${arcana} Tarot card. Use witchy, glitchy language, neon-noir metaphors, and techno-occult terminology. Ensure the tone is evocative and mysterious.`,
      config: {
        temperature: 0.9,
        topP: 0.95,
      }
    });
    return (response as any).text || "The spirits are silent, but the neon hums your name.";
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : "An error occurred during the request.";
    console.error("Gemini Error:", errorMessage);
    return "The veil is thin; seek the truth within the shadows.";
  }
}
