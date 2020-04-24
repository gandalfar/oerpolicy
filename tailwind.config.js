const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#1a91e6",
          "500": "#0f578a",
          "600": "#105689",
        },
        secondary: "#ff8000",
      },
      fontFamily: {
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      },
    },
    variants: {},
    plugins: [require("@tailwindcss/ui")],
  },
}
