/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "7h": "7vh",
        "10h": "10vh",
        "50h": "50vh",
      },
      width: {
        "20w": "20vw",
        "30w": "30vw",
        "70w": "70w",
        "50 w": "50vw",
      },
      minWidth: {
        250: "250px",
        396: "396px",
      },
      backgroundColor: {
        lightGray: "#FAFBFC",
        darkGray: "#DCDFE4",
        lightBlue: "#E6EFFC",
        darkBlue: "#0052CC",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
