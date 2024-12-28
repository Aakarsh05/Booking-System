// Created seats number is 80 seats in total
const seats = Array.from({ length: 80 }, (_, index) => ({
    seat_id: index + 1,
    booked: false,
}));

// Function to get all the seats
const getSeats = () => seats;

console.log("Seats fetched:", seats);

// Function to book the seats
const bookSeats = (seatIds) => {
    const bookedSeats = [];

    // Attempt to book each seat
    seatIds.forEach((id) => {
        const seat = seats.find((s) => s.seat_id === id && !s.booked);
        if (seat) {
            seat.booked = true;
            bookedSeats.push(seat);
        }
    });

    console.log("Seats to reserve:", seatIds);

    return bookedSeats;
};

module.exports = { getSeats, bookSeats };
