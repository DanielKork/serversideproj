const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        maxLength:32,
        trim: true
    },
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
    birthday:{
        type:Date,
        required:true,
        maxLength:32,
        trim: true
    }
   
})

module.exports = mongoose.model("User", userSchema);
