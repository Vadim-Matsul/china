const typescriptParser = require('@typescript-eslint/parser');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const unusedImportsPlugin = require('eslint-plugin-unused-imports');
const reactPlugin = require('eslint-plugin-react');

module.exports = [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      'unused-imports': unusedImportsPlugin,
      react: reactPlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      'react/no-unescaped-entities': 'off',
      'react/no-children-prop': 'off',
      'react/jsx-no-comment-textnodes': 'off',
    },
  },
  {
    ignores: ['**/node_modules/', '**/dist/', '**/build/', '**/.next/', '**/next/'],
  },
];
