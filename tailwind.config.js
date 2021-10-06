module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "stick": 'Stick No Bills',
        "akronim": 'Akronim',
        "poppins": 'Poppins',
        "noto": 'Noto Sans',
      },
    },
  },
  variants: {
    extend: {
      zIndex: ['hover', 'active'],
      padding: ['hover', 'focus'],
      space: ['hover', 'focus'],
      height: ['hover', 'focus'],
      width: ['hover', 'focus'],
      backgroundColor: ['active'],
      borderRadius: ['hover', 'focus'],
      animation: ['hover', 'focus'],
      borderWidth: ['hover', 'focus'],
      borderColor: ['hover', 'focus'],
      borderStyle: ['hover', 'focus'],
    },
  },
  plugins: [],
}
