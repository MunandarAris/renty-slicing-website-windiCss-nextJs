import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["**/*.{js, jsx, ts, tsx}", "components/**/*.{js, jsx, ts, tsx}"],
    exclude: ["node_modules", ".git", ".next"],
  },
  // config theme
  theme: {
    extend: {
      // screen config
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      // config base color
      colors: {
        body: "#2D2D2F",
        blue: "#4573FD",
        green: "#1FAB71",
        white: "#FFFFFF",
        gray: "#969696",
      },

      // custom keyframes
      keyframes: {
        showHideDrawerMobile: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },

      // custom animation
      animation: {
        showHideDrawerMobile: "showHideDrawerMobile .5s",
      },
    },
  },

  // plugins
  plugins: [require("@windicss/plugin-scrollbar")],
});
