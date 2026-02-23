import { GoogleGenAI, Type } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // Ensure API key is available
const ai = new GoogleGenAI({ apiKey });

export interface AssessmentResult {
  severity: "Low" | "Medium" | "High" | "Critical";
  likelyCause: string;
  recommendedAction: string;
  estimatedUrgency: string;
}

export const analyzeWaterIssue = async (userDescription: string): Promise<AssessmentResult> => {
  if (!apiKey) {
    // Fallback if no API key is present for demo purposes
    return {
      severity: "Medium",
      likelyCause: "Potential foundation crack or hydrostatic pressure.",
      recommendedAction: "Schedule a professional on-site inspection to identify the source.",
      estimatedUrgency: "Within 1-2 weeks"
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a professional waterproofing contractor expert in New Jersey.
      Analyze the following homeowner issue description and provide a preliminary technical assessment.
      
      Homeowner Issue: "${userDescription}"
      
      Provide the output in JSON format with the following fields:
      - severity: (Low, Medium, High, or Critical)
      - likelyCause: (A brief technical explanation, max 1 sentence)
      - recommendedAction: (Immediate steps or services needed, max 1 sentence)
      - estimatedUrgency: (When they should fix it, e.g., "Immediately", "Before next rain", etc.)
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            severity: { type: Type.STRING, enum: ["Low", "Medium", "High", "Critical"] },
            likelyCause: { type: Type.STRING },
            recommendedAction: { type: Type.STRING },
            estimatedUrgency: { type: Type.STRING },
          },
          required: ["severity", "likelyCause", "recommendedAction", "estimatedUrgency"],
        },
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as AssessmentResult;
  } catch (error) {
    console.error("AI Analysis failed", error);
    return {
      severity: "Medium",
      likelyCause: "Complex water intrusion issue.",
      recommendedAction: "Professional diagnostic required.",
      estimatedUrgency: "As soon as possible"
    };
  }
};