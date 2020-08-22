/**
 * Compiles the frontend code and listens for request for it
 * Also sets up hot module reload for development purposes
 */
const Bundler = require('../bundler')
const Server = require('../server')

Bundler.isDev = true

Server.app.use(require('webpack-dev-middleware')(Bundler.compiler, {
  noInfo: true, publicPath: Bundler.webpackConfig.output.publicPath
}))

Server.app.use(require('webpack-hot-middleware')(Bundler.compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}))

Server.start()
