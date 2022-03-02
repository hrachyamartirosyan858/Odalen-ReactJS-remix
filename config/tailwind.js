module.exports = {
  mode: "jit", // this will enable Tailwind JIT compiler to make the build faster
  // purge: ["./app/**/*.{js,jsx}"], // Here we are going to tell Tailwind to use any .ts or .tsx file to purge the CSS
  content: [
    // Example content paths...

    "./public/**/*.html",
    "./app/**/*.{js,jsx,ts,tsx,vue}",
  ],
  darkMode: "media", // Use media queries for dark mode, customize it as you want
  theme: {
    extend: {
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
        1500: "1500ms",
      },
      transitionTimingFunction: {
        cubic: "cubic-bezier(.04,.1,0,1.05)",
      },
    },
  }, // customize the theme however you want here
  variants: {}, // activate any variant you want here
  plugins: [], // add any plugin you need here
};
