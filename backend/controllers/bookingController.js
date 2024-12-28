const { getSeats, bookSeats } = require("../models/seatModel");

// View all seats
const viewSeats = (req, res, next) => {
    try {
        const seats = getSeats();
        res.json(seats);
    } catch (error) {
        next(error);
    }
};

// Reserve seats
const reserveSeats = (req, res, next) => {
    try {
        const { seatIds } = req.body;

        if (!seatIds || !Array.isArray(seatIds)) {
            return res.status(400).json({ error: "Invalid seatIds format." });
        }

        const bookedSeats = bookSeats(seatIds);
        if (bookedSeats.length === 0) {
            return res.status(400).json({ error: "Seats cannot be booked." });
        }

        res.json({ message: "Seats booked successfully", bookedSeats });
    } catch (error) {
        next(error);
    }
};

module.exports = { viewSeats, reserveSeats };
