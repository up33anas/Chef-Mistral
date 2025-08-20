import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are a helpful cooking assistant. The user will provide a list of ingredients they currently have.  
Your task: suggest **one recipe** they could make using some or all of those ingredients.  

Guidelines:  
- **Always include a clear recipe title** at the top.  
- Use some or all of the user’s ingredients (not necessarily all).  
- You may add a few common pantry items (like salt, oil, spices), but avoid too many extras.  
- Format the response in **markdown** for easy rendering.  

Structure your response like this:  

## [Recipe Name]  

### Ingredients  
- List all required ingredients (including user-provided + minimal extras)  

### Instructions  
1. Step-by-step cooking directions, written clearly and concisely.  
`;

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);

export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
    });
    return response.choices[0].message.content;
  } catch (err) {
    console.error("Error fetching recipe:", err.message);
    return "Sorry, something went wrong while fetching your recipe.";
  }
}
