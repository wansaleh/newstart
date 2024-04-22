import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

import { type Config } from 'tailwindcss';

export default {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '2rem',
				sm: '2rem',
			},
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				sans: [
					// 'var(--font-sans)',
					'var(--font-geist-sans)',
					'InterVariable',
					...defaultTheme.fontFamily.sans,
				],
				serif: ['Boska', ...defaultTheme.fontFamily.sans],
				wide: ['Panchang', ...defaultTheme.fontFamily.sans],
			},

			colors: {
				gray: colors.zinc,
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				marquee: {
					from: {
						transform: 'translateX(0)',
					},
					to: {
						transform: 'translateX(calc(-100% - 2.5rem))',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				marquee: 'marquee 120s linear infinite',
			},
			boxShadow: {
				huge: '0 20px 40px 1px rgba(0,0,0,.12), inset 0 -10px 20px -5px rgba(0,0,0,.3), 0 150px 100px -80px rgba(0,0,0,.4), inset 0 1px 4px hsla(0,0%,100%,.6), inset 0 -1px 1px 1px rgba(0,0,0,.2)',
			},
		},
	},
	plugins: [
		require('tailwindcss-animate'),
		require('@tailwindcss/typography'),
		require('tailwindcss-easing'),

		plugin(function ({ addVariant }) {
			addVariant('firefox', '@supports (-moz-appearance: none)');
			addVariant('safari', '@supports (background: -webkit-named-image(i))');
			addVariant('chrome', '@supports (-webkit-app-region: inherit)');
		}),
	],
} satisfies Config;
