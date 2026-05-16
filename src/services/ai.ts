import { GoogleGenAI } from "@google/genai";

const getAI = () => {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not defined");
  }
  return new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
};

export { getAI };
