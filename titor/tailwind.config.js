const tailwindcss = require("tailwindcss")

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      colors: {
        grey:{
          DEFAULT: "#44404f"
        },
        blue: {
          light: "#0a2e58",
          DEFAULT: "#091837"
        },
        purple: {
          lightest: "#702763",
          light: "#552067",
          DEFAULT: "#281961"
        },
        green: {
          light: "#64c224",
          DEFAULT: "#0fa10d",
          dark: "#097938"
        },
        yellow: {
          DEFAULT: "#e1d483",
          dark: "#c8a26e",
          darkest: "#b67a5b"
        }
      }
    },
    variants: {
      extend: {},
    },
    corePlugins: {
      container: false
    },
    plugins: [
      ({addComponents}) => {
        addComponents({
          '.container': {
            maxWidth: '100%',
            maxHeight: '100%'
          }
        })
      }
    ],
  }