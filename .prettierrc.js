module.exports = {
  printWidth: 80,
  semi: true,
  bracketSpacing: false,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.{js,jsx,ts,tsx}',
      options: {
        tabWidth: 2,
      },
    },
  ],
};
