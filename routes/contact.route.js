const express = require('express')
const userRouter = express.Router()
const { getUser, postUser, upUser, delUser } = require('../controllers/contact.control')


//routes 
    //get route
userRouter.get('/users', getUser)
    //post route
userRouter.post('/newUser', postUser)
    //put route
userRouter.put('/update/:id', upUser)
    //deltet route
userRouter.delete('/user/:id', delUser)

//export of routes
module.exports = userRouter