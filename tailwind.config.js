module.exports = {
  mode : 'jit',
  content: [
    "./*.html", 
    "./assets/*.js"
  ],
  theme: {
    fontFamily: {
        roboto: ["Roboto", "sans-serif"],
    },
    fontSize: {
      title: '28px',
      sm: '12px',
      md: '15px',
      base: '16px',
      xl: '20px',
      xxl: '24px',
    },
    color: {
      gray: {
        600: "#4f6477",
        700: "#2b3b48"
      }
    },
  },
}