const mongoose = require("mongoose")

const caloriesSchema = new mongoose.Schema({
    user_id:{
        type:String,
        required:true,
        maxLength:32,
        trim: true
    },
    year:{
        type:String,
        required:true,
        maxLength:32,
        trim: true
    },
    month:{
        type:String,
        required:true,
        maxLength:32,
        trim: true
    },
    day:{
        type:String,
        required:true,
        maxLength:32,
        trim: true
    },
    description:{
        type:String,
        required:true,
        maxLength:32,
        trim: true
    },
    category:{
        type:String,
        required:true,
        maxLength:32,
        trim: true
    },
    amount:{
        type:String,
        required:true,
        maxLength:32,
        trim: true
    }
})

module.exports = mongoose.model("calories", caloriesSchema)
