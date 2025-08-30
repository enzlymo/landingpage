import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dotted-grid': 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 2px, transparent 0)',
        'main-gradient': 'linear-gradient(135deg, #FF8A3D, #FFD43B, #00B4D8)',
        'yellow-gradient': 'linear-gradient(135deg, #FFD43B, #FFBE0B, #FF8A3D)',
        'blue-gradient': 'linear-gradient(135deg, #0077B6, #00B4D8, #90E0EF)',
        'modern-gradient': 'linear-gradient(135deg, #FFD43B, #00B4D8, #FF8A3D)',
        'dark-gradient': 'linear-gradient(135deg, #111111, #333333)',
  		},
      backgroundSize: {
        'dotted-grid': '32px 32px',
      },
  		keyframes: {
  			appear: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '100%'
  				}
  			}
  		},
  		animation: {
  			appear: 'appear 300ms ease-out forwards'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  				colors: {
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))'
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))'
			},
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			chart: {
				'1': 'hsl(var(--chart-1))',
				'2': 'hsl(var(--chart-2))',
				'3': 'hsl(var(--chart-3))',
				'4': 'hsl(var(--chart-4))',
				'5': 'hsl(var(--chart-5))'
			},
			lymo: {
				yellow: '#FFD43B',
				orange: '#FF8A3D',
				blue: '#00B4D8',
				darkblue: '#0077B6',
				black: '#111111',
				white: '#FFFFFF',
				'dark-gray': '#333333',
				'mid-gray': '#777777',
				'light-gray': '#F5F5F5',
			},
			gradient: {
				orange: '#FF8A3D',
				blue: '#00B4D8',
				darkblue: '#0077B6',
				yellow: '#FFD43B',
			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
