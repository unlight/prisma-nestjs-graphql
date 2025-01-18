import 'eslint-plugin-only-warn';

import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier/recommended';
import * as unicorn from 'eslint-plugin-unicorn';
import perfectionist from 'eslint-plugin-perfectionist';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import wixEditor from 'eslint-plugin-wix-editor';
import { fixupPluginRules } from '@eslint/compat';
import * as regexpPlugin from 'eslint-plugin-regexp';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  regexpPlugin.configs['flat/recommended'],
  prettier,
  {
    ignores: ['dist/', 'coverage/', '@generated/**', '*.config.[cm]js', '.*rc.js'],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        project: ['./tsconfig.json'],
        warnOnUnsupportedTypeScriptVersion: false,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'max-lines': [1, { max: 300 }],
      'max-params': [1, { max: 5 }],
      'no-unneeded-ternary': [1],
    },
  },
  {
    plugins: {
      'wix-editor': fixupPluginRules(wixEditor),
    },
    rules: {
      'wix-editor/no-instanceof-array': 1,
      'wix-editor/no-not-not': 1,
      'wix-editor/no-unneeded-match': 1,
      'wix-editor/prefer-filter': 1,
      'wix-editor/prefer-ternary': 1,
      'wix-editor/return-boolean': 1,
      'wix-editor/simplify-boolean-expression': 1,
    },
  },
  {
    ...unicorn.configs['flat/recommended'],
    rules: {
      'unicorn/prevent-abbreviations': [
        'warn',
        {
          replacements: {
            args: false,
          },
        },
      ],
    },
  },
  {
    plugins: {
      perfectionist,
    },
    rules: {
      'perfectionist/sort-objects': [
        'warn',
        {
          type: 'natural',
          order: 'asc',
        },
      ],
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
    },
  },
  {
    rules: {
      // core
      'consistent-return': [0, { treatUndefinedAsUnspecified: false }],
      quotes: [1, 'single', { allowTemplateLiterals: true, avoidEscape: true }],
      semi: [1, 'always'],
      'max-lines': [1, { max: 300 }],
      'max-params': [1, { max: 5 }],
      'no-unneeded-ternary': [1],
      // wix-editor
      'wix-editor/no-instanceof-array': 1,
      'wix-editor/no-not-not': 1,
      'wix-editor/no-unneeded-match': 1,
      'wix-editor/prefer-filter': 1,
      'wix-editor/prefer-ternary': 1,
      'wix-editor/return-boolean': 1,
      'wix-editor/simplify-boolean-expression': 1,
      // unicorn
      'unicorn/prefer-spread': 0,
      'unicorn/catch-error-name': 0,
      'unicorn/prefer-node-protocol': 0,
      'unicorn/prevent-abbreviations': [
        1,
        {
          replacements: {
            args: false,
            err: false,
            prod: false,
            ref: false,
            params: false,
          },
        },
      ],
      // simple-import-sort with recomended settings
      'simple-import-sort/imports': 1,
      'sort-imports': 'off',
      'import/order': 'off',
      // typescript-eslint
      '@typescript-eslint/no-floating-promises': 1,
      '@typescript-eslint/no-unnecessary-condition': 1,
      '@typescript-eslint/explicit-module-boundary-types': 0,
      '@typescript-eslint/unbound-method': 0,
    },
  },
  {
    files: ['*.spec.ts', '**/{test,@generated}/**/*.ts'],
    rules: {
      'consistent-return': 0,
      'max-lines': 0,
      'regexp/strict': 0,
      '@typescript-eslint/no-misused-promises': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-unsafe-member-access': 0,
      '@typescript-eslint/no-floating-promises': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/camelcase': 0,
      '@typescript-eslint/no-unsafe-assignment': 0,
      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/no-unsafe-return': 0,
      '@typescript-eslint/no-non-null-asserted-optional-chain': 0,
      'import/max-dependencies': 0,
    },
  },
];
