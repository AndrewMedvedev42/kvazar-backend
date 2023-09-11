const mongoose = require('mongoose');
const ImageModel = require("./image.model")
//USER MODEL SCHEMA
const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true, 'must providename'],
        trim:true,
    },
    lastName:{
        type:String,
        required:[true, 'must providename'],
        trim:true,
    },
    userName:{
        type:String,
        required:[true, 'must providename'],
        trim:true,
    },
    email:{
        type:String,
        required:[true, 'must providename'],
        trim:true,
    },
    password:{
        type:String,
        required:[true, 'must providename'],
        trim:true,
    },
    privateAccount:{
         type:Boolean,
         default:false
    },
    imageList:[ImageModel.schema]
})

module.exports = mongoose.model('User', UserSchema)