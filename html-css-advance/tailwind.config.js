module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: "390px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      boxShadow: {
        "input-shadow": "0px 10px 20px rgba(237, 172, 172, 0.5)",
      },
      colors: {
        pink: {
          50: "#fef0ef",
          500: "#f66962",
          600: "#f85f58",
        },
        orange: {
          50: "#fdf3e9",
          500: "#f68c1f",
        },
        blue: {
          50: "#dcf7fe",
          100: "#bbf0fe",
          500: "#2cb7ee",
        },
        green: {
          50: "#bbf0fe",
          100: "#cef5d6",
          500: "#6cd879",
        },
        violet: {
          50: "#efeff7",
          100: "#e2dcfe",
          500: "#5444a6",
          900: "#282834",
        },
      },
    },
  },
  plugins: [],
};
