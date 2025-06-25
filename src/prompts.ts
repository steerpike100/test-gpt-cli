export function generatePrompt(input: string, mode: string = 'code'): string {
  switch (mode.toLowerCase()) {
    case 'manual':
      return `
You're a senior QA engineer. Write a detailed manual test case checklist for the following requirement:

${input}
      `.trim();

    case 'gherkin':
      return `
Convert the following requirement into one or more Gherkin-style BDD scenarios. Use the format:

Feature: ...
  Scenario: ...
    Given ...
    When ...
    Then ...

Input:
${input}
      `.trim();

    case 'code':
    default:
      return `
You are an expert in test automation.

Convert the following requirement or BDD scenario into a runnable Playwright test in TypeScript.

Use '@playwright/test' and include all relevant imports.

Input:
${input}
      `.trim();
  }
}
