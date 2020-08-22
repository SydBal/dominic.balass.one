/*  webpack.js
 *  Main file which deligates how webpack configs are used
 *
 *  bundle()
 *  Exported main function. Definition of how webpack is used.
 *
 *  @param {String} env: Application environment status
 */

const webpack = require('webpack')

class Bundler {
  constructor ({
    isDev
  } = {}) {
    const webpackConfig = require(`./webpack.${isDev ? 'dev' : 'prod'}`)
    this.compiler = webpack(webpackConfig)
  }

  // Compile code once
  // Mainly used for production
  compile () {
    return new Promise((resolve, reject) => {
      this.compiler.run((err, stats) => {
        if (err) {
          console.error(err)
          reject(err)
        }
        console.log(stats.toString({
          chunks: false, // Makes the build much quieter
          colors: true // Shows colors in the console
        }))
        resolve(stats)
      })
    })
  }

  // Watch files to be compiled
  // Recompile when changes are made
  watch () {
    return new Promise((resolve, reject) => {
      this.compiler.watch({
        // Watch Options
      }, (err, stats) => {
        if (err) {
          console.error(err)
          reject(err)
        }
        console.log(stats.toString({
          chunks: false, // Makes the build much quieter
          colors: true // Shows colors in the console
        }))
        resolve(stats)
      })
    })
  }
}

module.exports = new Bundler()
