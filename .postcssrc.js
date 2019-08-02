module.exports = {
  plugins: {
    autoprefixer: {},
    cssnano: {
      preset: [
        'default',
        {
          discardComments: {
            removeAll: process.env.NODE_ENV === 'production'
          }
        }
      ]
    }
  }
}
