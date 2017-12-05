var http = require('http')
var express = require('express')
var app = express()

app.use(express.static('./public'))

http.createServer(app).listen(7000, function() {
  console.log('Servidor iniciado...')
})
