const mongoose = require('mongoose');
//TASK MODEL SCHEMA
const ImageSchema = new mongoose.Schema({
    image:{
        type:String,
        data:Buffer
    },
    title:{
        type:String,
        required:[true, 'must providename'],
        trim:true,
    },
    description:{
        type:String,
        required:[true, 'must providename'],
        trim:true,
    },
    dateOfCreation:{
        type:String,
        default:"--/--/--"
    },
    author:{
            userId:{
                type:String,
                trim:true,
            },
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
            }
        }
})

module.exports = mongoose.model('Image', ImageSchema)