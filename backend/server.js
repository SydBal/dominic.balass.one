const path = require('path')
const express = require('express')
const app = express()
const bundler = require('./bundler')

// Frontend
app.use(express.static(path.join(__dirname, '../frontend/public')))
app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public/index.html'))
})

bundler({
  app,
  isDev: process.env.NODE_ENV === 'development'
})

// Config for Heroku Buildpack
const port = process.env.PORT || 1337

// Service!
app.listen(port, () => {
  console.log(`listening on localhost:${port}`)
})
