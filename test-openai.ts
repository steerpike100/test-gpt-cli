// test-openai.ts
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function testCall() {
  const response = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Write a test case for logging into a web app' }],
    model: 'gpt-3.5-turbo',
  });

  console.log('✅ OpenAI responded with:\n', response.choices[0]?.message?.content);
}

testCall().catch(err => {
  console.error('❌ Error calling OpenAI:', err.message);
});
