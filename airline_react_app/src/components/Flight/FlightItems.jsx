import React from 'react'
import './FlightCard.css'
import { deleteFlight, getFlightById } from '../../services/FlightService';
import { useNavigate } from 'react-router-dom';


function FlightItems({ flightNumber, flightName, departureAirport, arrivalAirport,
    departureTime, arrivalTime, availableSeats   ,flight_link ,onSelectFlight,onDeleteFlight}) {

    const navigate=useNavigate()


    const onSelectDelete = async (flight_id_link) => {
        await deleteFlight(flight_id_link);
        onDeleteFlight(); // Refresh the flight list
    };

  const onSelectUpdate= async (link)=>{
    // console.log(link);  ( will show all flight id links)
    
    let flight= await getFlightById(link);
    onSelectFlight(flight) //passing product as an argument

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
                            {/* <div className="float-left mt-1">
                                Seats Available: <strong>{availableSeats}</strong>
                            </div> */}
                            <br />
                            <button  className='btn btn-success'
                    //  onClick={onSelectUpdate(flight_link)}>  //this will print all links
                    onClick={()=>onSelectUpdate(flight_link)}>
                         Update</button>  

                    {/* flight_link is a prop which we have passed above */}

                    <button  className='btn btn-danger ms-4'
                    // product_link is a prop which we have passed above
                    onClick={()=>onSelectDelete(flight_link)}>
                        Delete</button>  
                        
                        <button href="#" className="btn btn-primary btn-lg menu-btn mt-4 ms-5 "
                        onClick={()=>{navigate(`/flight/${flightNumber}`)}}
                        >View Details</button>
                         
                         </div>
                    </div>
                   
                </div>
            </div>



        </div>
    )
}

export default FlightItems