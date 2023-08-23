/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite-react/**/*.js'
  ],
  theme: {
    extend: {
      colors:{
          main:{
            DEFAULT: "#00BFB3",
            light:"#00BFB31A"
          },
          secondary:{
            DEFAULT:'#E03469',
          },
          text:{
            DEFAULT:'#1E1E1E',
            light:'#535353',
            secoundry:"#757373"
          },
          line:{
            DEFAULT:'#B4B4B4',
          },
          backGroundNav:{
            DEFAULT:'rgb(0 0 0 / 86%)'
          },
          mobileMain:{
            DEFAULT: "#02bf02"
          },
      },
      screens:{
        lg: '940px'
      },
      plugins: [require('flowbite/plugin')],
    },
  }
}