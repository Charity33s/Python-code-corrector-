export const INITIAL_CODE = `import google.generativeai as genai

# This is a made up class, the Python SDK is not class-based for initialization
from google.generativeai import GoogleGenerativeAI

# Wrong initialization, tries to follow JS SDK pattern
ai = GoogleGenerativeAI(api_key="YOUR_API_KEY")

# Wrong method to get model, and a deprecated model name
model = ai.get_model('gemini-pro')

# Wrong generation call and response handling
result = model.generate_content("Explain how AI works in a few words")
text = result.text() # .text is a property, not a method
print(text)`;
