import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedStrategy } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateMarketingStrategy = async (
  propertyName: string,
  location: string,
  unitType: string,
  features: string
): Promise<GeneratedStrategy> => {
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  const prompt = `
    Create a slick, high-converting organic social media marketing strategy for a new property development.
    
    Property Name: ${propertyName}
    Location: ${location}
    Unit Type: ${unitType}
    Key Features: ${features}

    Focus on where renters actually hang out (TikTok, Instagram Reels, Local Subreddits).
    The tone should be modern, urgent, and authentic.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            headline: { type: Type.STRING, description: "A catchy 1-sentence hook for the campaign" },
            targetDemographic: { type: Type.STRING, description: "Specific persona targeting description" },
            platforms: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "Top 3 organic platforms to prioritize"
            },
            contentAngles: {
              type: Type.ARRAY,
              description: "3 specific video/post ideas",
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING }
                }
              }
            },
            sampleCaption: { type: Type.STRING, description: "A sample instagram/tiktok caption with hashtags" },
            estimatedReach: { type: Type.STRING, description: "A speculative reach projection (e.g., '15k - 20k local impressions/mo')" }
          },
          required: ["headline", "targetDemographic", "platforms", "contentAngles", "sampleCaption", "estimatedReach"]
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response generated");
    }

    return JSON.parse(text) as GeneratedStrategy;

  } catch (error) {
    console.error("Error generating strategy:", error);
    throw error;
  }
};