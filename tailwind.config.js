module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      'guava': '#FD5D5D',
      'peach': '#FF8080',
      'melon': '#FFF7BC',
      'apple': '#C0EDA6',
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
