
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const askMirishkorBot = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User is asking about Mirishkor district (Uzbekistan): "${query}". 
      Respond in Uzbek. Focus on Mirishkor's geography, history, economy (cotton, livestock), or administration. 
      Be helpful and informative. Keep it concise.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });
    return response.text || "Kechirasiz, ma'lumot topilmadi.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Tizimda xatolik yuz berdi. Iltimos keyinroq urinib ko'ring.";
  }
};
