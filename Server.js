const express = require('express')
const userRouter = require('./routes/contact.route')
const DBconnect = require('./config/conectDB')
require('dotenv').config()
const port = process.env.port

const app = express()
// use of routes 
app.use(express.json())
app.use('/api/', userRouter)
// connection of DB 
DBconnect()
//connection on port
app.listen(port, (err) => {
    err ? console.error : console.log('server is runnig on port 4100')
})



//  {
//      "Email" : "",
//      "Name" : "",
//      "lastName" : "",
//      "Age" : ""
//  }