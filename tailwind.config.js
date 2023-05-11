/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'spotify-1': '#121212',
        'spotify-2': '#282828',
        'spotify-3': '#2A2A2A',
      },
      minWidth: {
        '6': '1.5rem',
      },
    },
  },
  plugins: [],
}
