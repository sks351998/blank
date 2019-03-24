const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(path.join(__dirname,'public')))
app.use('/api',require('./routes/api').route)

app.listen(2600,() =>{ 
    console.log("Server started on port 2600")
})