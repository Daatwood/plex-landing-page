'use strict'
const {EventEmitter} = require('events')
const server = require('./server/server')
const config = require('./config/config')
const mediator = new EventEmitter()

console.log('Initializing Home Page')

process.on('uncaughtException', (err) => {
  console.error('Unhandled Exception', err)
})

process.on('uncaughtRejection', (err, promise) => {
  console.error('Unhandled Rejection', err)
})

mediator.once('boot.ready', () => {
  server.start({
    port: config.server.port
  })
  .then(app => {
    console.log(`Started successfully on port: ${config.server.port}.`)
    app.on('close', () => {
      console.log('Shutting down.')
    })
  })
})

mediator.emit('boot.ready')
