import defaultTheme from "tailwindcss/defaultTheme"

/**
 * The main Tailwind theme.
 *
 * Placed here for nicer imports into TS files for cases where we need a value outside Tailwind. Take care to provide
 * all required values here as we favor overwriting the theme than extending.
 */

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
      light: "#D9D9D9",
      DEFAULT: "#A4A4A4",
      dark: "#A4A4A4",
    },

    pages: {
      brown: "#ECE3DA",
      gray: "#E5E6E1",
      blue: "#E2EAF1",
      green: "#DAECDE",
      red: "#EDC4D2",
      purple: "#E3DAEC",
      pink: "#ECDAEB",
    },
  },
  dropShadow: {
    DEFAULT: "0 .25rem .625rem rgba(0, 0, 0, 0.25)",
  },
  fontFamily: {
    sans: ["var(--font-sans)", "sans-serif"],
  },
  screens: {
    sm: "412px",
    md: "542px",
    lg: "764px",
  },
}
