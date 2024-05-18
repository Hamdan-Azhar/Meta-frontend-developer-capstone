
const mongoose = require("mongoose");

const availableReservationTimesSchema = mongoose.Schema({
    date:{
      type:Date,
      required:true
    },
    times:{
      type:[String],
      required:true
    }
  })

  module.exports = mongoose.model("available_reservation_times",availableReservationTimesSchema);