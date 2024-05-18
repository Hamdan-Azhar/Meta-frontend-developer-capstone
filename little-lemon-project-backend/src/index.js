const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const reservationRouter = require("./routes/reservation");
const app = express();
const port = 8000;


app.use(cors());
app.use(express.json());
app.use("/reservation",reservationRouter)

mongoose.connect("mongodb+srv://admin:admin@cluster1.rhyw7uz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1").then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`);
    })
}).catch((error)=>{
    console.log("error");
})
