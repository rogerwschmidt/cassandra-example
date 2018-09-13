const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/api/todos', require('./routes/todos'))

app.use((req, res, next) => {
  next({status: 404, message: 'Route Not Found'})
})

app.use((err, req, res, next) => {
  console.log(err)
  
  const errorMessage = {}
  errorMessage.status = err.status || 500
  errorMessage.message = err.message || 'Internal Server Error'
  
  res.status(errorMessage.status).send(errorMessage)
})

module.exports = app