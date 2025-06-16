
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
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
				'archivo': ['Archivo', 'sans-serif'],
			},
			colors: {
				// scAIe Brand Colors siguiendo la línea gráfica
				'primary-bg': '#F5F5F5',
				'primary-text': '#1A1A1A',
				'secondary-text': '#4A4A4A',
				'accent-orange': '#FF6A00',
				'accent-orange-hover': '#FF8C33',
				'separator': '#E0E0E0',
				'gold': '#C8B566',
				'sage': '#A8B5A0',
				'light-blue': '#B8C5D1',
				
				// Keep existing shadcn colors
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
				}
			},
			fontSize: {
				// Jerarquía tipográfica mejorada y más impactante
				'hero': ['96px', { lineHeight: '0.85', fontWeight: '900', letterSpacing: '-0.04em' }],
				'display': ['80px', { lineHeight: '0.9', fontWeight: '900', letterSpacing: '-0.03em' }],
				'h1': ['64px', { lineHeight: '1.0', fontWeight: '900', letterSpacing: '-0.02em' }],
				'h2': ['48px', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.015em' }],
				'h3': ['32px', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.01em' }],
				'h4': ['24px', { lineHeight: '1.3', fontWeight: '600', letterSpacing: '-0.005em' }],
				'h5': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
				'subtitle': ['22px', { lineHeight: '1.4', fontWeight: '500' }],
				'body-xl': ['20px', { lineHeight: '1.6', fontWeight: '400' }],
				'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
				'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
				'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
				'button-xl': ['20px', { lineHeight: '1.2', fontWeight: '700' }],
				'button-lg': ['18px', { lineHeight: '1.2', fontWeight: '600' }],
				'button': ['16px', { lineHeight: '1.2', fontWeight: '600' }],
				'caption': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
				'legal': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.9)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(50px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'scale-in': 'scale-in 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.8s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
