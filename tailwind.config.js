module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          light: "#f9f6f2",
          DEFAULT: "#eae2d6",
          dark: "#d6c8b3"
        }
      }
    },
  },
  plugins: [],
}