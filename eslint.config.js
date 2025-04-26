import reactRefresh from 'eslint-plugin-react-refresh';

import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config(
  // Global (root‑level) options
  { ignores: ['dist'] },

  // Main linting ruleset for JS / TS / React source files
  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    settings: {
      react: { version: 'detect' },
    },

    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },

    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactPlugin.configs.recommended,
      prettierPlugin.configs.recommended,
    ],

    rules: {
      // --- Formatting / style -------------------------------------------------
      'prettier/prettier': 'error',
      indent: 'off',
      '@typescript-eslint/indent': 'off',
      semi: 'off',

      // --- General JS / TS ----------------------------------------------------
      'no-implicit-coercion': 'error',
      'no-undef': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-extra-boolean-cast': 'off',
      'getter-return': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-parameter-properties': 'off',

      // --- Restricted imports -------------------------------------------------
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'util',
              importNames: ['isArray'],
              message: 'use Array.isArray instead',
            },
          ],
        },
      ],

      // --- TypeScript best‑practices -----------------------------------------
      'no-async-promise-executor': 'warn',
      '@typescript-eslint/prefer-as-const': 'warn',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
      '@typescript-eslint/ban-types': 'warn',
      '@typescript-eslint/no-inferrable-types': 'warn',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        { selector: 'function', format: ['camelCase', 'PascalCase'] },
        { selector: 'interface', format: ['PascalCase'] },
        { selector: 'typeAlias', format: ['PascalCase'] },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            'public-static-field',
            'private-static-field',
            'public-instance-field',
            'private-instance-field',
            'public-constructor',
            'private-constructor',
            'public-instance-method',
            'private-instance-method',
          ],
        },
      ],

      // --- Code‑quality helpers ----------------------------------------------
      'no-warning-comments': [
        'warn',
        {
          terms: ['TODO', 'FIXME', 'XXX', 'BUG'],
          location: 'anywhere',
        },
      ],
      'prefer-const': 'error',
      'no-var': 'error',
      curly: ['error', 'all'],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'import/no-duplicates': 'error',

      // --- React‑specific rules ----------------------------------------------
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react/jsx-no-target-blank': 'error',
      'react/react-in-jsx-scope': 'off',

      // --- React‑Hooks rules --------------------------------------------------
      ...reactHooks.configs.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // --- Node interop -------------------------------------------------------
      '@typescript-eslint/no-var-requires': 'warn',
    },
  }
);
