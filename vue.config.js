const path = require('path')
const data = require('./data')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack (config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('views', resolve('src/views'))
      .set('styles', resolve('src/common/styles'))
  },
  devServer: {
    before (app) {
      app.get('/api/info', function (req, res) {
        res.json({
          error: 0,
          data: data.info
        })
      })
      app.get('/api/city', function (req, res) {
        res.json({
          error: 0,
          data: data.city
        })
      })
    }
  }
}
