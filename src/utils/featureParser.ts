export function parseFeature(fileContent:string):string{
    const lines = fileContent.split('\n');
    const filtered = lines.filter(line=> line.trim().startsWith('Scenario:') || line.trim().startsWith('Given') ||
        line.trim().startsWith('When') || line.trim().startsWith('Then') ||  line.trim().startsWith('And')    

    );
  return `
You are an expert in test automation. Convert the following BDD scenario into a TypeScript Playwright test using best practices.

Use the 'test' function from '@playwright/test'. Do not repeat the Gherkin syntax — write real test code.

${filtered.join('\n')}
`;

}