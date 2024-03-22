import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hero: ['Shantell Sans Variable', ...defaultTheme.fontFamily.sans],
        mono: ['Comic Mono', ...defaultTheme.fontFamily.mono],
      }
    },
  },
  plugins: [],
}
