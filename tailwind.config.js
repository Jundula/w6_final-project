/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
        '3000': '3000ms',
      },
      // keyframes: {
      //   wiggle: {
      //     "0%, 100%": { transform: "rotate(-3deg)" },
      //     "50%": { transform: "rotate(3deg)" }
      //   }
      // },
      keyframes: {
        slide: {
          "0% ": {  },
          "100%": { transform: "translateX(-200vw)" },
        }
      },
      // animation: {
      //   wiggle: "wiggle 200ms ease-in-out"
      // },
      animation: {
        slide: "slide 5000ms ease"
      }
    },
  },
  plugins: [],
}
