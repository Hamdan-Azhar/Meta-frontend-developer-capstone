const express = require("express");
const addReservation = require("../controller/reservationController");
const getAvailableReservationTimes = require("../controller/availableReservationTimesController");
const reservationRouter = express.Router();

reservationRouter.post("/add-reservation",addReservation)
reservationRouter.get("/available-times",getAvailableReservationTimes)
module.exports = reservationRouter;