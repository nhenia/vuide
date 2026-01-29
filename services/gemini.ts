
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || "";
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

/**
 * Fetches a cryptic prophecy for a specific location and arcana using Gemini AI.
 *
 * @param locationName - The name of the location.
 * @param arcana - The associated Tarot card.
 * @returns {Promise<string>} A poetic, glitchy prophecy.
 */
export async function getLocationProphecy(locationName: string, arcana: string): Promise<string> {
  if (!ai) {
    return "The spirits are silent (API Key missing).";
  }
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
