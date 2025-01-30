import React, { useEffect, useState } from 'react'
import '../../services/FlightService'
import { getFlightDetails, getFlightsAtoZ, getFlightsZtoA } from '../../services/FlightService'
import FlightItems from './FlightItems'
import './FlightCard.css'
import FlightForm from './FlightForm'
import Seats from '../Seats'


function Flight() {

  let [flights, setFlights] = useState([]);

  let [selectedFlight, setSelectedFlight] = useState(null); //or we can pass {} (object which has nothing)

  // For Searching
  let [searchQuery, setSearchQuery] = useState('')



  // To set selected product

  const handleSelectFlight = (selectedFlight) => {
    setSelectedFlight(selectedFlight)
    console.log(selectedFlight)
  }


  // Sorting Function
  const sort = async (choice) => {

    switch (choice) {

      case 1:
        setFlights(await getFlightsAtoZ());
        break;
      case 2:
        setFlights(await getFlightsZtoA());
        break;

    }
  }




  useEffect(() => {

    getFlightDetails()
      .then(data => {
        setFlights(data)
        // console.log(data);
      })
  }, [])

  // To refresh all flights when you add a new flight
  const refreshFlights = () => {
    getFlightDetails().then(data => {
      setFlights(data);
    })
  }




  return (

    <div>
      <div>
        <FlightForm
          onAddFlight={refreshFlights}
          selectedFlight={selectedFlight}
          onUpdateFlight={refreshFlights}
        //left side is a property (prop)from FlightForm.jsx
        //right side is value w have declared above 
        />
      </div>


      <h1 style={{ textAlign: 'center', color: 'darkblue' }}>All Flights</h1>

      <div class="dropdown ms-4">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Sort Flight Schedule <span className="badge bg-secondary">{flights.length}</span>
        </button>
        <br />
        <br />
        {/* To show total numbers of flights  {flights.length}*/}



        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li onClick={() => { sort(1) }}><a class="dropdown-item" >A-Z</a></li>
          <li onClick={() => { sort(2) }}><a class="dropdown-item" >Z-A</a></li>


        </ul>

      </div>

      <Seats setSearchQuery={setSearchQuery}/>

      {/* <ul className="list-group my-3">
              <li className="list-group-item" onClick={() => { sort(1) }}>A-Z</li>
              <li className="list-group-item" onClick={() => { sort(2) }}>Z-A</li>

             
            </ul> 
        </div> */}

      <div className="container-fluid">
        <br />

        <div className="row">
          {flights
            .filter((f) =>
              f.flightName.toLowerCase().includes(searchQuery.toLowerCase()) // Filter flights based on searchQuery
            )
            .map((f) => (
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={f.id}>
                <FlightItems
                  flightName={f.flightName}
                  departureAirport={f.departureAirport}
                  arrivalAirport={f.arrivalAirport}
                  departureTime={f.departureTime}
                  arrivalTime={f.arrivalTime}
                  availableSeats={f.availableSeats}
                  onSelectFlight={handleSelectFlight}
                  flight_link={f._links?.self?.href} // Ensure safe access
                />
              </div>
            ))}

        </div>
      </div>
    </div>
  );
}

export default Flight