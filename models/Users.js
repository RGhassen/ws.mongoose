const mongoose = require('mongoose');

//creation of our schema to be know the type and requirement on DB
const userSchema = mongoose.Schema({
    Email: {
        type: String,
        required: true, // must have an email
        timestamps: true // time of creation
    },
    Name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    }
})
// i uset the mongose model as user to simplify the use
const user = mongoose.model('user', userSchema)
// export of userSchema
module.exports = user;