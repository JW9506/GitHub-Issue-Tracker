module.exports = {
  tabWidth: 2,
  semi: false,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      options: {
        semi: true,
      },
    },
  ],
  trailingComma: 'es5',
  arrowParens: 'always',
  singleQuote: true,
  htmlWhitespaceSensitivity: 'strict',
}
