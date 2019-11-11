/*  webpack.js
 *  Main file which deligates how webpack configs are used
 *
 *  bundle()
 *  Exported main function. Definition of how webpack is used.
 *
 *  @param {String} env: Application environment status
 */
module.exports = ({
  app,
  isDev
}) => {
  const webpack = require('webpack')
  const webpackConfig = require(`./webpack.${isDev ? 'dev' : 'prod'}`) // Select config based on environment status
  const compiler = webpack(webpackConfig)

  // Compile code once
  // Mainly used for production
  const compile = async () => {
    compiler.run((err, stats) => {
      if (err) {
        console.error(err)
        return err
      }
      console.log(stats.toString({
        chunks: false, // Makes the build much quieter
        colors: true // Shows colors in the console
      }))
      return stats
    })
  }

  // Watch files to be compiled
  // Recompile when changes are made
  const watch = async () => {
    compiler.watch({
      // Watch Options
    }, (err, stats) => {
      // Print watch/build result here...
      if (err) {
        console.error(err)
        return
      }
      console.log(stats.toString({
        chunks: false, // Makes the build much quieter
        colors: true // Shows colors in the console
      }))
      return stats
    })
  }

  // Choose which compile style to use based on environment
  return isDev ? watch() : compile()
}
