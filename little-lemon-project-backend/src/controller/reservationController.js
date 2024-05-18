const decrypt = require("bcrypt");
const reservationModel = require("../model/reservationModel");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "Hamdan";

const addReservation = async (req,res) =>{
    const {name,email,phone,occasion,time,numberOfGuests} = req.body;
    
    try{
        const hashedPhoneNumber = await decrypt.hash(phone,10);
        const reservation_data = await reservationModel.create({
            name : name,
            email : email,
            phone : hashedPhoneNumber,
            occasion : occasion,
            time : time,
            numberOfGuests: numberOfGuests
        });

        const token = jwt.sign({email:reservation_data.email,id:reservation_data._id},SECRET_KEY);
        res.status(201).json({user:reservation_data,token:token})
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"something went wrong"})
    }
}


module.exports = addReservation;