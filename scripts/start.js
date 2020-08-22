/**
 * Compiles the frontend code once and listens for request for it
 */
const Bundler = require('../bundler')
const Server = require('../server')

new Bundler()
  .then(() => {
    new Server().start()
  })
