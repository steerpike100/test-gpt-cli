export function generatePrompt(input: string, mode: 'code' | 'manual' | 'gherkin' = 'code'): string {
  switch (mode) {
    case 'manual':
      return `Write a structured manual test case checklist for the following requirement:\n\n${input}`;
    case 'gherkin':
      return `Convert this requirement into Gherkin-style BDD scenarios:\n\n${input}`;
    default:
      return `Convert this requirement or BDD scenario into a runnable Playwright test in TypeScript:\n\n${input}`;
  }
}
