export function generatePrompt(userInput: string): string {
  return `
Act as a senior test automation engineer.

Given the following user story or BDD scenario:

${userInput}

Generate a complete, runnable Playwright test in TypeScript. 
Include imports. Use 'test' from '@playwright/test'.
`;
}