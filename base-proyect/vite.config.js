const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      'bootstrap': path.resolve(__dirname, '/bootstrap'),
    }
  },
  server: {
    port: 3000,
    hot: true
  }
}