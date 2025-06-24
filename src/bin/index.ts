#!/usr/bin/env node
import { Command } from 'commander';
import { generatePrompt } from '../prompts.js';
import { getGeneratedTests } from '../generator.js';
import chalk from 'chalk';
import fs from 'fs/promises';
import path from 'path';

const program = new Command();

console.log('🔐 API Key starts with:', process.env.OPENAI_API_KEY?.slice(0, 5));


program
  .version('0.2.0')
  .option('-t, --text <requirement>', 'Requirement or user story text')
  .option('-f, --file <filepath>', 'Path to a text file with requirements')
  .action(async (opts) => {
    let inputText = '';

    if (opts.text) {
      inputText = opts.text;
    } else if (opts.file) {
      const filePath = path.resolve(opts.file);
      try {
        inputText = await fs.readFile(filePath, 'utf-8');
      } catch (err) {
        console.error(chalk.red(`❌ Failed to read file: ${filePath}`));
        process.exit(1);
      }
    } else {
      console.error(chalk.red('❌ Please provide either --text or --file input.'));
      process.exit(1);
    }

    const prompt = generatePrompt(inputText);
    console.log(chalk.blue('📨 Prompt being sent to OpenAI:\n'), prompt);
    const output = await getGeneratedTests(prompt);

    console.log(chalk.green('\n✅ Generated Tests:\n'));
    console.log(output);
  });

program.parse(process.argv);
