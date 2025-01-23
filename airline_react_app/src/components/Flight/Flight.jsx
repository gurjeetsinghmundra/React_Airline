import React, { useEffect, useState } from 'react'
import '../../services/FlightService'
import { getFlightDetails } from '../../services/FlightService'
import FlightItems from './FlightItems'

function Flight() {

    let [flights, setFlights] = useState([]);


    useEffect(() => {

        getFlightDetails()
            .then(data => {
                setFlights(data)
                // console.log(data);
            })
    }, [])

    return (
        <div className="container-fluid">
          <div className="row">
            {flights.map((f) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={f.flightName}>
                <FlightItems
                  flightName={f.flightName}
                  departureAirport={f.departureAirport}
                  arrivalAirport={f.arrivalAirport}
                  departureTime={f.departureTime}
                  arrivalTime={f.arrivalTime}
                  availableSeats={f.availableSeats}
                />
              </div>
            ))}
          </div>
        </div>
      );
}

export default Flight