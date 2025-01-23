import tiagoportoPrettierConfig from '@tiagoporto/prettier-config'

/**
 * @type {import("prettier").Config}
 */
export default {
  ...tiagoportoPrettierConfig,
  plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.svelte',
      options: {
        parser: 'svelte',
      },
    },
  ],
}
