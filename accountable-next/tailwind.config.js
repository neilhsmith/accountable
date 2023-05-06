import theme from "./src/app/theme"
import container from "./src/common/tailwind/mobile-container"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    ...theme,
  },
  plugins: [container],
}
