export default {
  '*': 'prettier --check --ignore-unknown --write',
  '*.{md,markdown,mdx}': ['remark --frail', 'eslint --max-warnings 0'],
  '*.{css,scss}': 'stylelint --fix',
  '*.{ts,tsx}': () => 'tsc --project tsconfig.json',
  '*.{js,mjs,jsx,ts,tsx}': [
    'eslint --max-warnings 0',
    //   'jest --bail --findRelatedTests --passWithNoTests',
  ],
}
