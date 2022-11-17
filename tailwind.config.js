/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          primary: "#0FCFEC",

          secondary: "#19D3AE",

          accent: "#3A4256",

          neutral: "#27f9a9",

          "base-100": "#FFFFFF",

          info: "#9DD5E1",

          success: "#115533",

          warning: "#EC840E",

          error: "#FB452D",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
