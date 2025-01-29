import React, { useEffect, useState } from 'react';
import './Booking.css';
import { getSeats } from '../../services/SeatService';


const BookingSeats = () => {
    
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seats,setSeats]=useState([]);
    useEffect(()=>{

        getSeats().then(data=>{
            setSeats(data)
        })

    },[])

    // Define the rows and seats in the airplane
    const rows = 20;
    const seatsPerRow = 6;
    const seatMap = Array.from({ length: rows }, (_, rowIndex) =>
      Array.from({ length: seatsPerRow }, (_, seatIndex) => ({
        id: `${rowIndex + 1}${String.fromCharCode(65 + seatIndex)}`,
        occupied: Math.random() < 0.3, // Randomly make some seats occupied
      }))
    );
  
    const handleSeatClick = (rowIndex, seatIndex) => {
      const seatId = seatMap[rowIndex][seatIndex].id;
      if (selectedSeats.includes(seatId)) {
        setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
      } else {
        setSelectedSeats([...selectedSeats, seatId]);
      }
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
          <div className="seat-map">
            {seatMap.map((row, rowIndex) => (
              <div key={rowIndex} className="row1">
                {row.map((seat, seatIndex) => (
                  <div
                    key={seat.id}
                    className={`seat ${
                      seat.occupied ? 'red' : selectedSeats.includes(seat.id) ? 'green' : 'grey'
                    }`}
                    onClick={() => !seat.occupied && handleSeatClick(rowIndex, seatIndex)}
                  >
                    {seat.id}
                  </div>
                ))}
              </div>
            ))}


        
          </div>



          <div className="tail">Tail</div>
        </div>


        {/* ============================================================= */}

        <div className="airplane">
          <div className="cockpit">Cockpit</div>
          <div className="seat-map">
           
                {seats.map((seat) => (
                  <div
                    key={seat.id}
                    className={`seat ${
                      seat.occupied ? 'red' : selectedSeats.includes(seat.id) ? 'green' : 'grey'
                    }`}
                    onClick={() => !seat.occupied }
                  >
                    {seat.seatNumber}
                  </div>
                ))}


        
          </div>



          <div className="tail">Tail</div>
        </div>

       

        {/* ================================================================ */}




        <div className="summary">
          <p>
            Selected Seats: {selectedSeats.join(', ')}
          </p>
          <p>Total Price: ₹{selectedSeats.length * 1000}</p>
        </div>
        </div>
      </div>
    );
  };

export default BookingSeats;
