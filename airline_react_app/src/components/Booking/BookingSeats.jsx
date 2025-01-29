import React, { useEffect, useState } from 'react';
import './Booking.css';
import { getSeats } from '../../services/SeatService';



const BookingSeats = () => {
  const [selectedSeats, setSelectedSeats] = useState(new Set());
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    fetchSeats();
  }, []);

  const fetchSeats = async () => {
    try {
      const data = await getSeats();
      setSeats(data);
    } catch (error) {
      console.error("Error fetching seats:", error);
    }
  };

  const handleSeatClick = (seatId) => {
    setSelectedSeats((prevSelectedSeats) => {
        const newSelectedSeats = new Set(prevSelectedSeats);
        if (newSelectedSeats.has(seatId)) {
            newSelectedSeats.delete(seatId); // Deselect if already selected
        } else {
            newSelectedSeats.add(seatId); // Select if not selected
        }
        return newSelectedSeats; // Ensure React recognizes state change
    });
};

  return (
    <div className="airplane-container">
      <div className='all'>
        <h1 className="title">Airplane Seat Reservation</h1>
        <div className="legend">
          <div className="legend-item">
            <div className="seat green"></div> Selected
          </div>
          <div className="legend-item">
            <div className="seat grey"></div> Available
          </div>
          <div className="legend-item">
            <div className="seat red"></div> Occupied
          </div>
        </div>
        <div className="airplane">
          <div className="cockpit">Cockpit</div>

          {/* Seats */}

    
          <div className="seat-map">
            {seats.reduce((rows, seat, index) => {
              if (index % 2 === 0) rows.push([]);
              rows[rows.length - 1].push(seat);
              return rows;
            }, []).map((row, rowIndex) => (
              <div key={rowIndex} className="row">
                {row.map(seat => (
                  <div
                    key={seat.seatNumber}
                    className={`seat ${seat.occupied ? 'red' : selectedSeats.has(seat.seatNumber) ? 'green' : 'grey'}`}
                    onClick={() => !seat.occupied && handleSeatClick(seat.seatNumber)}
                  >
                    {seat.seatNumber}
                  </div>
                ))}
              </div>
            ))}
          </div>


          {/*  */}
          {/* Tail */}
          <div className="tail">Tail</div>
        </div>
        <div className="summary">
          <p>Selected Seats: {[...selectedSeats].join(', ')}</p>
          <p>Total Price: ₹{selectedSeats.size * 1000}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingSeats;
