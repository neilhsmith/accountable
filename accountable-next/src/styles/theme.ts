import colors from "tailwindcss/colors"

/**
 * The main Tailwind theme.
 *
 * Placed here for nicer imports into TS files for cases where we need a value outside Tailwind. Take care to provide
 * all required values here as we favor overwriting the theme than extending.
 */

export default {
  colors: {
    transparent: "transparent",
    current: "currentColor",
    white: colors.white,
    black: {
      DEFAULT: "#333333",
      light: "#616161",
      dark: "#333333",
    },
    gray: {
      DEFAULT: "#A4A4A4",
      light: "#D9D9D9",
      dark: "#A4A4A4",
    },

    faded: {
      brown: "#ECE3DA",
      gray: "#E5E6E1",
      blue: "#E2EAF1",
      green: "#DAECDE",
      red: "#EDC4D2",
      purple: "#E3DAEC",
      pink: "#ECDAEB",
    },
  },
}
