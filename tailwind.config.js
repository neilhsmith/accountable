/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      borderRadius: {
        sm: "20px",
        DEFAULT: "30px",
        lg: "40px",
      },
      boxShadow: {
        DEFAULT: "0px 4px 10px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        "page-bg": {
          tan: "#ECE3DA",
          gray: "#E5E6E1",
          green: "#DAECDE",
          purple: "#E3DAEC",
          pink: "#EDC4D2",
          red: "#ECDAEC",
          blue: "#E2EAF1",
        },

        white: "#FFFFFF",
        black: {
          0: "#000000",
          10: "#333333",
          20: "#616161",
        },
        gray: {
          0: "#A4A4A4",
          10: "#D9D9D9",
          20: "#E5E6E1",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        sm: "1rem", // 16px
        base: "1.125rem", // 18px
        lg: "1.5rem", // 24px,
        xl: "2rem", // 32px
        "2xl": "4rem", // 64rem
      },
      letterSpacing: {
        tight: "-0.05em",
        normal: "0",
        wide: "0.05em",
      },
      spacing: {
        "2%": "2%",
        "10%": "10%",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          paddingLeft: "4px",
          paddingRight: "4px",
          "@screen sm": {
            maxWidth: "600px",
            paddingLeft: "0",
            paddingRight: "0",
          },
          "@screen md": {
            maxWidth: "700px",
          },
          "@screen lg": {
            maxWidth: "800px",
          },
        },
      })
    },
  ],
}
