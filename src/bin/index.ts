#!/usr/bin/env node
import dotenv from 'dotenv';
dotenv.config();

import { Command } from 'commander';
import { generatePrompt } from '../prompts.js';
import { getGeneratedTests } from '../generator.js';
import { parseFeature } from '../utils/featureParser.js';
import chalk from 'chalk';
import fs from 'fs/promises';
import path from 'path';
import { highlight } from 'cli-highlight';

const program = new Command();

type CliOptions = {
  text?: string;
  file?: string;
  output?: string;
};

function prettyPrint(code: string) {
  console.log(chalk.greenBright('\n=== GENERATED TEST CODE ===\n'));
  console.log(highlight(code, { language: 'typescript', ignoreIllegals: true }));
  console.log(chalk.greenBright('\n============================\n'));
}

program
  .version('0.2.0')
  .option('-t, --text <requirement>', 'Requirement or user story text')
  .option('-f, --file <filepath>', 'Path to a .txt or .feature file')
  .option('-o, --output <filename>', 'Write output to a file')
  .action(async () => {
    try {
      const opts = program.opts<CliOptions>();

      let inputText = '';

      if (opts.text) {
        inputText = opts.text;
      } else if (opts.file) {
        const filePath = path.resolve(opts.file);
        const ext = path.extname(filePath);

        try {
          const fileContent = await fs.readFile(filePath, 'utf-8');
          if (ext === '.feature') {
            inputText = parseFeature(fileContent);
          } else if (ext === '.txt') {
            inputText = fileContent;
          } else {
            console.error(chalk.red(`❌ Unsupported file type: ${ext}`));
            process.exit(1);
          }
        } catch (err) {
          console.error(chalk.red(`❌ Failed to read file: ${filePath}`));
          process.exit(1);
        }
      } else {
        console.error(chalk.red('❌ Please provide either --text or --file input.'));
        process.exit(1);
      }

      const prompt = generatePrompt(inputText);
      const output = await getGeneratedTests(prompt);

      if (!output || output.trim() === '') {
        console.warn(chalk.yellow('⚠️ No output returned from GPT.'));
        return;
      }

      if (opts.output) {
        const outPath = path.resolve(opts.output);
        await fs.writeFile(outPath, output);
        console.log(chalk.green(`\n✅ Output written to ${outPath}\n`));
      } else {
        prettyPrint(output);
      }

    } catch (err: any) {
      console.error(chalk.red('❌ Unexpected error in CLI:'), err.message);
    }
  });

program.parse(process.argv);

