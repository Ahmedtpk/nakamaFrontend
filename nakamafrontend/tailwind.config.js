/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { 
        'nakama-pink': '#EF666F'
      },
      fontFamily: {
        nakama: ['OpenSans-Regular', 'sans-serif'],
        'nakama-text': ['nakamaBodytext', 'sans-serif'],
        'nakama-regular': ['nakamaBodytext-Regular', 'sans-serif'],
        'nakama-bold': ['nakamaBodytext-DemiBold', 'sans-serif'],
        'nakama-header': ['nakamaHeadline-Regular', 'sans-serif']
      },
    },
  },
  plugins: [],
}
