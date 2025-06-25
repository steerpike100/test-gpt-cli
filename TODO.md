# ✅ test-gpt-cli – Project TODO

A command-line tool to generate structured software test cases from user stories or requirements using OpenAI GPT models.

---

## ✅ MVP (Minimum Viable Product)

- [x] Read user input via `--text`
- [x] Read requirements from a file via `--file`
- [x] Generate prompt from input
- [x] Call OpenAI's API using `gpt-3.5-turbo`
- [x] Print AI-generated tests to the terminal
- [x] Use `.env` file to load API key securely
- [x] `npm link` support for local CLI usage
- [x] Git initialized with `.gitignore` for `.env`, `node_modules`, `dist/`
- [x] Validate OpenAI response and catch errors

---

## 🔜 Short-Term Improvements

- [ ] Add `--output <filename>` to write tests to file
- [ ] Add `--format <markdown|gherkin|json>` flag
- [ ] Add `--model <gpt-3.5-turbo|gpt-4>` option
- [ ] Add `--dry-run` mode to preview the prompt only
- [ ] Improve logging and user feedback in terminal
- [ ] Handle file input with multiple stories (`---` or bullet-separated)

---

## 🧹 Code Cleanup & DX

- [ ] Improve TypeScript types and return structure
- [ ] Add CLI help (`--help`) and usage examples
- [ ] Add unit tests for prompt generation and error handling
- [ ] Use a bundler like `tsup` or `esbuild` for faster builds
- [ ] Add a `prepublishOnly` script to build before publishing

---

## 📦 GitHub & npm Prep

- [ ] Add `README.md` with usage, examples, and installation
- [ ] Add `LICENSE` (MIT)
- [ ] Add `keywords` and author info to `package.json`
- [ ] Tag first release as `v1.0.0`
- [ ] Publish to `npm` (`npm publish --access public`)

---

## 🚀 Stretch Goals

- [ ] Add folder input (`--dir`) to scan multiple files
- [ ] Create a VSCode extension
- [ ] Build a minimal web UI (Next.js or Electron)
- [ ] Enable output upload to TestRail or Jira
- [ ] Add authentication via GitHub or Google for shared usage
- [ ] Add analytics or logging to track coverage / usage patterns
