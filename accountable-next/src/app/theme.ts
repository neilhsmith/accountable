import defaultTheme from "tailwindcss/defaultTheme"

export default {
  borderRadius: {
    sm: ".625rem", // 10px
    md: "1.25rem", // 20px
    DEFAULT: "1.25rem",
    lg: "1.875rem", // 30px
    xl: "2.5rem", // 40px
    full: defaultTheme.borderRadius.full,
  },
  colors: {
    transparent: "transparent",
    current: "currentColor",
    white: "#FFFFFF",
    black: {
      light: "#616161",
      DEFAULT: "#333333",
      dark: "#333333",
    },
    gray: {
      DEFAULT: "#7D89A7",
    },
  },
  dropShadow: {
    DEFAULT: "0 .25rem .625rem rgba(0, 0, 0, 0.25)",
  },
  fontFamily: {
    sans: ["var(--font-inter)", "sans-serif"],
  },
  screens: {
    sm: "412px",
    md: "542px",
    lg: "764px",
  },
}
