import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: { 
      'xxsm': '300px',
      // => @media (min-width: 640px) { ... }

      'xsm': '320px',
      // => @media (min-width: 640px) { ... }
      
      '2sm': '375px',
      // => @media (min-width: 640px) { ... }

      '3sm': '425px',
      // => @media (min-width: 640px) { ... }
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1720px',
      // => @media (min-width: 1720px) { ... }

      '4xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      colors: {
        'gold1': '#f0c15f',
        'gold2': '#f6d078',
        'light': '#d6d6d6',
        'dark1': '#181818',
        'dark2': '#333333',
        'dark3': '#2F2F2F',
        'teste': '#565656',
      },
    },
  },
  plugins: [],
}
export default config
