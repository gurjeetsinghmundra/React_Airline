import React, { useEffect, useState } from 'react';
import { getSeats } from '../../services/SeatService';
import { useParams } from 'react-router-dom';
import Seat from './Seat';

function ShowingBooking() {
    const [seats, setSeats] = useState([]);
    const { flightNumber } = useParams();
    const[passenger,setPassenger]=useState(null);


    useEffect(()=>{


    })

    useEffect(() => {
        const fetchSeats = async () => {
            try {
                if (flightNumber) {
                    const data = await getSeats(flightNumber);
                    setSeats(data);
                    console.log("Fetched Seats:", data); // Debugging
                }
            } catch (error) {
                console.error("Error fetching seats:", error);
            }
        };

        fetchSeats();
    }, [flightNumber]);

    // Calculate seat counts
    const occupiedSeats = seats.filter(seat => seat.occupied).length;
    const availableSeats = seats.length - occupiedSeats;

    return (
        <div className="container mt-4">
            <h2 className="  p-2  text-center" >All BOOKINGS</h2>

            {/* Seat Summary */}
            <div className="alert alert-info d-flex justify-content-between">
                <span>🟢 Available Seats: <strong>{availableSeats}</strong></span>
                <span>🔴 Occupied Seats: <strong>{occupiedSeats}</strong></span>
                <span>✈️ Total Seats: <strong>{seats.length}</strong></span>
            </div>

            <table className="table table-striped table-bordered">
                <thead className="bg-primary text-white">
                    <tr>
                        <th>Seat Number</th>
                        <th>Status</th>
                        <th>Passanger Name</th>
                    </tr>
                </thead>
                <tbody>
                    {seats.map((seat) => (
                      <Seat seatNumber={seat.seatNumber} occupied={seat.occupied} 
                      passengerFirstName={seat.passengerFirstName}
                    //   
                      passengerLastName={seat.passengerLastName}
                      dateOfBirth={seat.dateOfBirth}
                      gender={seat.gender}
                      passportNumber={seat.passportNumber}
                      nationality={seat.nationality}
                      phoneNumber={seat.phoneNumber}
                      address={seat.address}
                      />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ShowingBooking;
