module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:12306',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
