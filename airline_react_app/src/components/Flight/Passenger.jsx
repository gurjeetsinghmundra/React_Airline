import React, { useEffect, useState } from 'react'
import { getPassengerDetails } from '../../services/PassengerService'
import FlightDetails from './FlightDetails'

function Passenger() {
    let [passenger, setPassenger] = useState([])


    useEffect(() => {
      getPassengerDetails() //return promise
        .then(data => {
          setPassenger(data)
        })
    }, []) 
  return (
    <div>
        <FlightDetails
     
        />
    </div>
  )
}

export default Passenger