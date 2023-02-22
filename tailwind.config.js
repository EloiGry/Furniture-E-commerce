const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Raleway": ["Raleway", ...defaultTheme.fontFamily.sans],
        "TitleFont" : ["Dancing Script", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'transparent': 'transparent',
        'black': '#081c15',
        'white': '#ffffff',
        'gold': '#DEB887',
        'grey': '#343a40 '
      },
    },
  },
  plugins: [],
}