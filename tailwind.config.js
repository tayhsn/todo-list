/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.tsx'],
   theme: {
      extend: {
         fontFamily: {
            sans: 'Inter, sans-serif',
         },
         colors: {
            gray: {
               100: '#F2F2F2',
               200: '#D9D9D9',
               300: '#808080',
               400: '#333333',
               500: '#262626',
               600: '#1A1A1A',
               700: '#0D0D0D',
            },
            purple: '#8284FA',
            purpleDark: '#8284FA',
            blue: '#4EA8DE',
            blueDark: '#1E6F9F',
            danger: '#E25858',
         },
      },
   },
   plugins: [],
};
