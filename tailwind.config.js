/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      // min width 
      coxs: '320px',
      co: '375px',
      xs: '425px',
      md: '768px',
      coxl: '1024px',
      co2xl: '1366px',
      '2xl': '1536px',
      max: '2560px',
      // max width  
      twentyfivesixty: {max: '2560px'},
      mynew: {max: '1536px'},
      forteenfoty: {max: '1440px'},
      myscreen: {max: '1366px'},
      tentofor: { max: '1024px' },
      sevensixeight: {max: '768px'},
      sevensmall: {max: '760px'},
      fortwentyfive: {max: '425px'},
      three: {max: '375px'},
      threetwenty: {max: '320px'},
      // min and max width breakpoints
      'md-to-lg': { min: '769px', max: '2560px' }, 
      'sm-to-md': { min: '375px', max: '426px' },
      'md-to-mm': { min: '320px', max: '426px' },
    },
    extend: {
      colors: {
        primay: '#111439',
        primayt: '#0a2540',
        c1: '#2e3a55',
        c2: '#00d4ff',
        c3: '#adbdcc',
        wite: '#FFFFFF',
        greay: '#94A3B8',
        sgray: '#425466',
        lightbl: '#F6F9FB',
        darkbl: '#635BFF',
        xtrablue: '#0A2540',
        secondary: '#3F4B66',
      },
    },
  },
  plugins: [],
}
