const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
        maxLength:32,
        trim: true
    },
    last_name:{
        type:String,
        required:true,
        maxLength:32,
        trim: true
    },
    password:{
        type:String,
        required:true,
        maxLength:32,
        trim: true
    }
})

module.exports = mongoose.model("User", userSchema)
