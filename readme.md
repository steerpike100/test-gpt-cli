# 🧪 test-gpt-cli

Generate structured software test cases from requirements or user stories using OpenAI's GPT models — from your terminal.

> ⚡ AI-powered testing, built for automation and repeatability.

---

## ✨ Features

- 🔹 Accepts `--file` or `--text` input
- 🔹 Sends prompts to OpenAI's GPT models (3.5 or 4)
- 🔹 Outputs test cases in Markdown, Gherkin, or JSON (coming soon)
- 🔹 Fully scriptable and CI-friendly
- 🔹 Zero-copy: no ChatGPT UI needed

---

## 🚀 Quick Start

```bash
# Install globally (after publishing)
npm install -g test-gpt-cli

# OR run directly (before publishing)
npx ts-node bin/index.ts --file requirements.txt
