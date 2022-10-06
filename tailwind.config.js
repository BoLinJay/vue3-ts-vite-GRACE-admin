module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  plugins: [require('daisyui')],
    // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
