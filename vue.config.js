const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')

module.exports = {
  configureWebpack: {
    output: {
      filename: 'app.js',
    },
  },
  filenameHashing: false,
  css: {
    extract: {
      filename: 'app.css',
    },
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
  },
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
  }
}
