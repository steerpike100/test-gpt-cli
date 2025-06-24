export function generatePrompt(requirement:string):string{
  return `Generate BDD-style test scenarios in Gherkin format based on this requirement:\n\n"${requirement}"`;

}