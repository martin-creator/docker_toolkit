const express = require('express')
const process = require('process')
const app = express()

process.on('SIGINT', () => {
    console.log('Application is being interrupted...')
    process.exit(0)
})

process.on('SIGTERM', () => {
    console.log('Application is being terminated...')
    process.exit(0)
})

app.get('/', function (req, res) {
  console.log("Request received!")
  res.send('Hello World!')
  res.send('This Express app was executed by Node.js container inside of the Docker')
  res.json({ message: 'Hello World!' })
})
 
app.listen(3000)