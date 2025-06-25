# 🧪 test-gpt-cli

Generate structured software test cases from requirements or user stories using OpenAI's GPT models — from your terminal.

> ⚡ AI-powered testing, built for automation and repeatability.

---

## ✨ Features

* 🔹 Accepts `--file` or `--text` input
* 🔹 Sends prompts to OpenAI's GPT models (3.5 or 4)
* 🔹 Outputs test cases in Markdown, Gherkin, or JSON (coming soon)
* 🔹 Fully scriptable and CI-friendly
* 🔹 Zero-copy: no ChatGPT UI needed

---

## 🚀 Quick Start

```bash
# Install globally (after publishing)
npm install -g test-gpt-cli

# OR run directly (before publishing)
npx ts-node bin/index.ts --file requirements.txt
```

---

## 📝 Examples

```bash
# Generate from plain text
test-gpt --text "As a user, I want to reset my password so I can log back in securely"

# Generate from a file
test-gpt --file ./stories/checkout.txt

# Save the output to a file (coming soon)
test-gpt --file login.txt --output login-tests.md

# Use a different model (coming soon)
test-gpt --file login.txt --model gpt-4
```

---

## ⚙️ CLI Options

| Flag       | Description                                 |
| ---------- | ------------------------------------------- |
| `--text`   | Raw requirement or story as input           |
| `--file`   | Path to text file with requirements         |
| `--output` | Output file path (planned)                  |
| `--format` | Output format: markdown, json, gherkin      |
| `--model`  | GPT model to use (default: `gpt-3.5-turbo`) |

---

## 🔐 Environment Setup

Create a `.env` file in the project root:

```
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxx
```

> **Do not commit this file.**

---

## 💻 Developer Setup

```bash
# Clone the repo
git clone https://github.com/your-username/test-gpt-cli
cd test-gpt-cli

# Install dependencies
npm install

# Run locally
npx ts-node bin/index.ts --text "Your requirement here"

# Compile CLI for use with `npm link`
npm run build
npm link
```

---

## 📆 Publish to npm

```bash
# Build before publishing
npm run build

# Login and publish
npm login
npm publish --access public
```

---

## ✅ Roadmap

* [ ] `--output` flag to save generated tests
* [ ] Support Gherkin / JSON output
* [ ] Batch mode for multiple stories
* [ ] VSCode extension or Electron UI
* [ ] Integration with test case tools (TestRail, Zephyr)

---

## 📝 License

MIT — free to use, fork, extend.

---

## 🤝 Contributing

Contributions welcome!
Please open an issue or PR if you have improvements, prompt tweaks, or integrations in mind.
