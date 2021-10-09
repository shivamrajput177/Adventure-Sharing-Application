const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    username : {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
    title : {
        type:String,
        required:true,
    },
    description : String,
    story : [String],
    latitude : {
        type : Number ,
        required : true,
        min : -90,
        max : 90,
    },
    longitude : {
        type : Number ,
        required : true,
        min : -180,
        max : 180,
    },
    visitDate : {
        type : Date,
        default : Date.now,
    },
},{
    timestamps:true,
})

const LogFile = mongoose.model('LogFile',logSchema)
module.exports = LogFile