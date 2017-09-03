const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
var path = require('path')

const start = (options) => {
  return new Promise((resolve, reject) => {
    if (!options.port) {
      reject(new Error('The server must be started with an available port'))
    }

    const app = express()
    app.use(morgan('dev'))
    app.use(helmet())
    app.use((err, req, res, next) => {
      reject(new Error('Something went wrong!, err:' + err))
      res.status(500).send('Something went wrong!')
    })

    app.get('/', (req, res, next) => {
      res.status(200).sendFile(path.join(__dirname + '/index.html'));
    })

    const server = app.listen(options.port, () => resolve(server))
  })
}

module.exports = Object.assign({}, {start})
