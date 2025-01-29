import React from 'react'
import './FlightCard.css'


function FlightItems({ flightName, departureAirport, arrivalAirport,
    departureTime, arrivalTime, availableSeats ,onSelectFlight}) {

        const onSelectUpdate=(link)=>{
            console.log(link);
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
                            <button  className='btn btn-success'
                    //  onClick={onSelectUpdate(product_link)}>  //this will print all links
                    onClick={()=>onSelectUpdate()}>  
                    Update</button> 

                            <button type="button" class="btn ms-5">Delete</button>
                            </div>
                    </div>
                   
                </div>
            </div>



        </div>
    )
}

export default FlightItems