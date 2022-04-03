module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "18px": "18px",
        "22px": "22px",
        "133px": "133px",
      },
      height: {
        "407px": "407px",
      },
      colors: {
        blue: {
          primary: "#0D28A6",
          secondary: "#F1F3FF",
        },
        green: {
          primary: "#5CB85F",
          secondary: "#C9E7CA",
          limeGreen: "#DEF1DF",
        },
        gray: {
          placeholder: "#8A8A8A",
        },
      },
    },
  },
  plugins: [],
};
