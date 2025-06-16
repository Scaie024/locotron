import type { Config } from "tailwindcss";
import { theme } from "./src/lib/theme";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: [theme.typography.fontFamily.primary],
				display: [theme.typography.fontFamily.secondary],
			},
			colors: {
				// Shadcn/UI colors mapped to CSS variables
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',

				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},

				// scAIe Custom Brand Colors from src/lib/theme.ts
				'primary-neutral': theme.colors.primary.neutral,
				'primary-black': theme.colors.primary.black,
				'secondary-lightGray': theme.colors.secondary.lightGray,
				'secondary-gray': theme.colors.secondary.gray,
				'accent-blue': theme.colors.accent.blue,
				'accent-green': theme.colors.accent.green,
				'accent-mainBlue': theme.colors.accent.mainBlue,
				'accent-goldenYellow': theme.colors.accent.goldenYellow,
				'accent-bluePale': theme.colors.accent.bluePale,
				'background-light': theme.colors.background.light,
				'background-neutral': theme.colors.background.neutral,
				'background-dark': theme.colors.background.dark,
				'text-primary': theme.colors.text.primary,
				'text-secondary': theme.colors.text.secondary,
				'text-light': theme.colors.text.light,
				
			},
			fontSize: {
				'hero': ['120px', { lineHeight: '1', fontWeight: '900', letterSpacing: '-0.05em' }],
				'display': ['100px', { lineHeight: '1.05', fontWeight: '900', letterSpacing: '-0.04em' }],
				'h1': ['88px', { lineHeight: '1.1', fontWeight: '900', letterSpacing: '-0.03em' }],
				'h2': ['72px', { lineHeight: '1.15', fontWeight: '700', letterSpacing: '-0.02em' }],
				'h3': ['56px', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.01em' }],
				'h4': ['40px', { lineHeight: '1.3', fontWeight: '600', letterSpacing: '-0.005em' }],
				'h5': ['30px', { lineHeight: '1.4', fontWeight: '600' }],
				'subtitle': ['32px', { lineHeight: '1.4', fontWeight: '500' }],
				'body-xl': ['26px', { lineHeight: '1.6', fontWeight: '400' }],
				'body-lg': ['24px', { lineHeight: '1.6', fontWeight: '400' }],
				'body': ['22px', { lineHeight: '1.6', fontWeight: '400' }],
				'body-sm': ['20px', { lineHeight: '1.5', fontWeight: '400' }],
				'button-xl': ['26px', { lineHeight: '1.2', fontWeight: '700' }],
				'button-lg': ['24px', { lineHeight: '1.2', fontWeight: '600' }],
				'button': ['22px', { lineHeight: '1.2', fontWeight: '600' }],
				'caption': ['18px', { lineHeight: '1.4', fontWeight: '400' }],
				'legal': ['18px', { lineHeight: '1.4', fontWeight: '400' }],
			},
			borderRadius: {
				'sm': '0.5rem',
				'md': '0.75rem',
				'lg': '1.25rem',
				'xl': '2.5rem',
				'2xl': '3.5rem',
				'3xl': '4.5rem',
				'full': '9999px',
			},
			boxShadow: {
				'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
				'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
				'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
				'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
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
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'slide-in': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-in-out',
				'slide-in': 'slide-in 0.5s ease-in-out',
				'scale-in': 'scale-in 0.3s ease-in-out',
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwindcss-animate'),
	],
} satisfies Config;

export default config;
