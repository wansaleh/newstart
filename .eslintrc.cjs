/* eslint-env node */
module.exports = {
	$schema: 'https://json.schemastore.org/eslintrc',

	root: true,
	plugins: ['tailwindcss', 'unused-imports'],
	extends: [
		// 'eslint:recommended',
		// 'plugin:@typescript-eslint/recommended',
		'next/core-web-vitals',
		'prettier',
		'plugin:tailwindcss/recommended',
		// 'plugin:next-on-pages/recommended',
	],
	rules: {
		'no-console': 'warn',
		'sort-imports': 'off',
		'@next/next/no-html-link-for-pages': 'off',
		'prefer-template': 'warn',
		'react/jsx-key': 'off',
		'react/self-closing-comp': [
			'warn',
			{
				component: true,
				html: true,
			},
		],
		'tailwindcss/no-custom-classname': 'off',
		'tailwindcss/classnames-order': 'off',
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		'@typescript-eslint/no-explicit-any': 'off',
		// 'next-on-pages/no-unsupported-configs': 'warn',
	},
	settings: {
		tailwindcss: {
			callees: ['cn', 'cva', 'tv'],
			config: 'tailwind.config.ts',
		},
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser',
		},
	],
};
