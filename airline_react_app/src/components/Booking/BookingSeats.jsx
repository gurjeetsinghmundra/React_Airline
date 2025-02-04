import React, { useEffect, useState } from 'react';
import './Booking.css';
import { getSeats } from '../../services/SeatService';

const BookingSeats = ({ flightId, setNumberOfSeats,setSelectedSeatForPassenger }) => {
  const [selectedSeats, setSelectedSeats] = useState(new Set());
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const data = await getSeats(flightId);
        setSeats(data);
        console.log(selectedSeats);
        if (seats.length > 0) {
          setSelectedSeatForPassenger( [...selectedSeats][0]);
        }
               numberOfSeats(data); // Pass the fetched data to the function
      } catch (error) {
        console.error("Error fetching seats:", error);
      }
    };


    
    fetchSeats();
  }, [flightId,selectedSeats]);

  const numberOfSeats = (seatsData) => {
    // Calculate number of available seats
    setNumberOfSeats(seatsData.filter(seat => !seat.occupied).length);
  }

  const handleSeatClick = (seatId) => {
    
    setSelectedSeats((prevSelectedSeats) => {
      const newSelectedSeats = new Set(prevSelectedSeats);
      if (newSelectedSeats.has(seatId)) {
        newSelectedSeats.delete(seatId);
      } else {
        newSelectedSeats.add(seatId);
      }
      return newSelectedSeats;
    });
  };

  return (
    <div className="airplane-container">
      <h1 className="title">Airplane Seat Reservation</h1>
      <div className="legend">
        <div className="legend-item"><div className="seat green"></div> Selected</div>
        <div className="legend-item"><div className="seat grey"></div> Available</div>
        <div className="legend-item"><div className="seat red"></div> Occupied</div>
      </div>
      <div className="airplane">
        <div className="cockpit">Cockpit</div>
        <div className="seat-map">
          {seats.map(seat => (
            <div
              key={seat.seatNumber}
              className={`seat ${seat.occupied ? 'red' : selectedSeats.has(seat.seatNumber) ? 'green' : 'grey'}`}
              onClick={() => !seat.occupied && handleSeatClick(seat.seatNumber)}
            >
              {seat.seatNumber}
            </div>
          ))}
        </div>
        <div className="tail">Tail</div>
      </div>
      <div className="summary">
        <p>Selected Seats: {[...selectedSeats].join(', ')}</p>
        <p>Total Price: ₹{selectedSeats.size * 5000}</p>
      </div>
    </div>
  );
};

export default BookingSeats;
