/**
 * Compiles the frontend code and listens for request for it
 * Also sets up hot module reload for development purposes
 */
const Bundler = require('../bundler')
const Server = require('../server')

const settings = {
  isDev: true
}

new Bundler(settings)
  .then(() => {
    new Server().start()
  })
