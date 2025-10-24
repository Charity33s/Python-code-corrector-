import { GoogleGenAI, Type } from "@google/genai";
import type { CorrectionResponse } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const CORRECTION_EXAMPLE = `import google.generativeai as genai

# Configure the client with your API key
genai.configure(api_key="YOUR_API_KEY")

# Create the model instance
model = genai.GenerativeModel('gemini-2.5-flash')

# Generate content
response = model.generate_content("Explain how AI works in a few words")

print(response.text)
`;

const correctionSchema = {
  type: Type.OBJECT,
  properties: {
    corrected_code: {
      type: Type.STRING,
      description: "The fully corrected Python code as a single string.",
    },
    explanation: {
      type: Type.STRING,
      description: "A clear, concise explanation of the corrections in Markdown format. Use bullet points for the key changes.",
    },
  },
  required: ["corrected_code", "explanation"],
};

export const correctPythonCode = async (userCode: string): Promise<CorrectionResponse> => {
  const prompt = `
    You are an expert Python developer and code reviewer specializing in the Google Generative AI SDK.
    Your task is to analyze a user's Python code, compare it to a correct example, identify the errors, explain them clearly, and provide the corrected code.

    Here is the user's incorrect Python code:
    ---
    ${userCode}
    ---

    Here is the corrected and recommended version of the script for reference:
    ---
    ${CORRECTION_EXAMPLE}
    ---

    Please analyze the user's code and provide the following in the specified JSON format. The explanation should be in Markdown.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: correctionSchema,
      },
    });

    const jsonText = response.text.trim();
    const parsedResponse = JSON.parse(jsonText);

    // Basic validation
    if (!parsedResponse.corrected_code || !parsedResponse.explanation) {
      throw new Error("Invalid response format from AI.");
    }

    return parsedResponse as CorrectionResponse;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get code correction from AI. Please check your API key and try again.");
  }
};
