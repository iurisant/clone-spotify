/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '10px',
      },
      colors: {
        'spotify': '#1ed760',
        'spotifyh': '#169c46',
        'spotify-1': '#121212',
        'spotify-2': '#282828',
      },
      minWidth: {
        '6': '1.5rem',
      },
    },
  },
  plugins: [],
}
