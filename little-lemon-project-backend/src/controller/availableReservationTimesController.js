const availableReservationTimesModel = require("../model/availableReservationTimesModel");

const getAvailableReservationTimes = async (req,res) =>{
    const {date} = req.query;
    
    try{
        let available_reservation_times = await availableReservationTimesModel.findOne({
            date : date,
        }).select('times');

        if(!available_reservation_times)
            available_reservation_times = ['No times']
        else
            available_reservation_times = available_reservation_times['times']

        res.status(200).json({times:available_reservation_times})
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"something went wrong"})
    }
}


module.exports = getAvailableReservationTimes;