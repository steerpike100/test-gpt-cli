import OpenAI from 'openai';
import { OPENAI_API_KEY } from './config.js';

console.log('✅ ENV KEY (generator):', process.env.OPENAI_API_KEY);

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

export async function getGeneratedTests(prompt: string, model: string = 'gpt-3.5-turbo'): Promise<string> {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('Missing OPENAI_API_KEY in environment variables.');
    }

    const response = await openai.chat.completions.create({
      model,
      messages: [{ role: 'user', content: prompt }],
    });

    const content = response.choices[0]?.message?.content;

    if (!content || content.trim() === '') {
      console.warn('⚠️ OpenAI returned empty content.');
      console.dir(response, { depth: null });
      return '[No content returned from GPT]';
    }

    return content;
  } catch (err: any) {
    console.error('❌ Error calling OpenAI API:', err.message);
    return '[OpenAI API Error]';
  }
}

