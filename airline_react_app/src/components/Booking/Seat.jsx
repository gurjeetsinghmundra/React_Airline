import React, { useEffect, useState } from 'react'
import { getPassengerById } from '../../services/PassengerService'

function Seat(seat) {
    const [passenger,setPassenger]=useState({});

   

    useEffect(()=>{
    },[])
  return (
    <tr key={seat.seatNumber} className={seat.occupied ? "table-danger" : "table-success"}>
    <td>{seat.seatNumber}</td>
    <td>{seat.occupied ? "Occupied" : "Available"}</td>
    <td>{seat.passengerFirstName}</td>
    {/* Add passenger details */}
</tr>
  )
}

export default Seat