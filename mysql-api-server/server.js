const express = require('express')
const path = require('path')
const apiRoute = require('./routes/api')

const server = express()

server.use(express.json())
server.use(express.urlencoded({extended:true}))


server.use('/add',apiRoute)
server.use('/',express.static(path.join(__dirname, 'public_static')))


server.listen('5600')