const mongoose = require('mongoose')

const {Schema} = mongoose

const reqString = {
    type:String,
    required:true,
}

const logSchema = new Schema({
    username : {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
    title : reqString,
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


const journey = new Schema({
    username : {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
    title : reqString,
    description : String,
    dests : [logSchema],
    startDate : {
        type : Date,
        default : Date.now,
    },
    endDate : {
        type : Date,
        default : Date.now,
    },
},{
    timestamps:true,
})

const Journey = mongoose.model('Journey',journey)
module.exports = Journey



const LogFile = mongoose.model('LogFile',logSchema)
module.exports = LogFile