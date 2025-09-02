import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu({
  formatters: true,
  react: true,
  nextjs: true,
  typescript: true,

  // Configuration preferences
  lessOpinionated: true,
  isInEditor: false,

  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },

  ...compat.config({
    // https://github.com/francoismassart/eslint-plugin-tailwindcss
    extends: ['plugin:tailwindcss/recommended'],
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  }),

  formatters: {
    /**
     * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
     * By default uses Prettier
     */
    css: true,
    /**
     * Format HTML files
     * By default uses Prettier
     */
    html: true,
    /**
     * Format Markdown files
     * Supports Prettier and dprint
     * By default uses Prettier
     */
    markdown: 'prettier'
  }

  rules: {
    'node/prefer-global/process': 'off',
    'react-refresh/only-export-components': 'off',
    'no-unused-vars': ['error', { caughtErrors: 'none' }],
    'unused-imports/no-unused-vars': ['error', { caughtErrors: 'none' }],
  },
})
