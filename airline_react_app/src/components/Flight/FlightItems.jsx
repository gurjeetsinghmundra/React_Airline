import React from 'react'
import './FlightCard.css'
import { deleteFlight } from '../../services/FlightService';


function FlightItems({ flightName, departureAirport, arrivalAirport,
    departureTime, arrivalTime, availableSeats   ,flight_link}) {

  const onSelectDelete = async(flight_id_link)=>{
      const deletedFlight =await deleteFlight(flight_id_link)
  }



    return (
            
        <div>

            

            <div className="flight-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{flightName}</h4>
                        <h6 className="card-subtitle mb-2 text-muted">
                            {departureAirport} ➝ {arrivalAirport}
                        </h6>
                        <p className="text-justify" style={{ fontSize: '14px' }}>
                            Departure: {departureTime} <br />
                            Arrival: {arrivalTime}
                        </p>
                    </div>
                    <div className="card-footer">
                        <div className="clearfix">
                            <div className="float-left mt-1">
                                Seats Available: <strong>{availableSeats}</strong>
                            </div>
                            <br />
                            <button  className='btn btn-success'>             
                                  Update</button> 

                    {/* flight_link is a prop which we have passed above */}

                    <button  className='btn btn-danger'
                    // product_link is a prop which we have passed above
                    onClick={()=>onSelectDelete(flight_link)}>
                        Delete</button>                           
                         </div>
                    </div>
                   
                </div>
            </div>



        </div>
    )
}

export default FlightItems