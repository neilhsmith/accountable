const theme = {
  borderRadius: {
    none: "0",
    sm: "20px",
    md: "30px",
    lg: "40px",
    full: "100%",
    DEFAULT: "30px",
  },
  colors: {
    currentColor: "currentColor",
    transparent: "transparent",

    // unique colors used for page backgrounds & navbar icon flourishes
    page: {
      home: "#ECE3DA",
      register: "#ECDAEB",
      login: "#DAECDE",
      logout: "#F0D6C7",
      settings: "#DDE8FF",
      today: "#E5E6E1",
    },

    black: "#333333",
    white: "#FFFFFF",
    gray: {
      50: "#F1F1F1",
      100: "#CFCFCF",
      200: "#616161",
      300: "#424242",
    },
  },
  fontFamily: {
    sans: "var(--font-inter)",
  },
  ringColor: {},
}

export default theme
