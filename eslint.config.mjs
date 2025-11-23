import tpConfig from '@tiagoporto/eslint-config'
import vitest from '@vitest/eslint-plugin'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tpConfig.configs.base,
  {
  // web component
    files: ['**/LogoDownloadtip.js'],
    rules: {
      'unicorn/filename-case': [
        'warn',
        {
          case: 'pascalCase',
        },
      ],
    },
  },
  {
    files: ['**/test/**/*.js'],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },
]
