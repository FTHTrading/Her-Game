import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C96B',
          dark: '#9B7B2A',
        },
        gunmetal: {
          DEFAULT: '#2C3539',
          light: '#3D4F56',
          dark: '#1A2125',
        },
        silver: {
          DEFAULT: '#C0C0C0',
          light: '#D8D8D8',
          dark: '#909090',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #C9A84C 0%, #E8C96B 50%, #9B7B2A 100%)',
        'gradient-silver': 'linear-gradient(135deg, #909090 0%, #D8D8D8 50%, #909090 100%)',
      },
    },
  },
  plugins: [],
}
export default config
