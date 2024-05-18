const mongoose = require("mongoose")

const reservationSchema = mongoose.Schema({
    name : {
        type:String,
        required: true
    },
    email : {
        type:String,
        required: true
    },
    phone : {
        type:String,
        required: true
    },
    occasion : {
        type:String,
        enum: ["birthday","anniversary","business meeting"],
        required: true
    },
    time : {
        type:String,
        required: true
    },
    numberOfGuests : {
        type:String,
        enum: ["1","2","3","4"],
        required: true
    }
})

module.exports = mongoose.model("reservation_data",reservationSchema)