const express = require("express");
const { viewSeats, reserveSeats } = require("../controllers/bookingController");

const router = express.Router();

// Routes for seat management

// Viewing all seats

router.get("/view",(req,res) => {
    console.log("View Seats API called")
    viewSeats(req,res);
}); 

// Reserving all seats

router.post("/reserve", reserveSeats); 

module.exports = router;
