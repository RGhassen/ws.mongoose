const mongoose = require('mongoose');
require('dotenv').config()

// connection of DB exported to server.js
const DBconnect = async () => {
    try {
        await mongoose.connect(process.env.mongo_URI)// link imported from .env
        console.log('DB connected')
    } catch (error) {
        console.error(error)
    }
}
module.exports = DBconnect