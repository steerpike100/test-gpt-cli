import OpenAI from "openai";
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Generates tests based on the provided prompt using OpenAI's GPT-4 model.
 * @param {string} prompt - The prompt to generate tests for.
 * @returns {Promise<string>} - A promise that resolves to the generated tests.
 **/
export async function getGeneratedTests(prompt: string): Promise<string> {
  try {
   const response = await openai.chat.completions.create({
  messages: [{ role: 'user', content: prompt }],
  model: 'gpt-3.5-turbo', // fallback until GPT-4 API access is enabled
});

    const content = response.choices[0]?.message?.content;

    if (!content) {
      console.warn('⚠️ OpenAI returned no message content.');
      console.dir(response, { depth: null });
    }

    return content ?? '[No output from OpenAI]';

  } catch (err: any) {
    console.error('❌ OpenAI API call failed:', err.message);
    return '[Error from OpenAI API]';
  }
}

