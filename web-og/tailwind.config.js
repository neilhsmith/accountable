import theme from "./src/styles/theme"
import container from "./src/styles/tailwind/mobile-container"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme,
  corePlugins: {
    container: false,
  },
  plugins: [container],
}
