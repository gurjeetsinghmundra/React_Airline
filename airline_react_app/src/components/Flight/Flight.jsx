import React, { useEffect, useState } from 'react'
import '../../services/FlightService'
import { getFlightDetails, getFlightsAtoZ } from '../../services/FlightService'
import FlightItems from './FlightItems'

function Flight() {

  let [flights, setFlights] = useState([]);

  let [selectedFlight, setSelectedFlight ]= useState(null); //or we can pass {} (object which has nothing)

  const handleSelectFlight = (selectedFlight) => {

    setSelectedFlight(selectedFlight)

  }
    const sort = async (choice) => {

      switch (choice) {
       
        case 1:
          setFlights(await getFlightsAtoZ());
          break;
        // case 2:
        //   setFlights(await getProductsZtoA());
        //   break;
  
      }
  }



  useEffect(() => {

    getFlightDetails()
      .then(data => {
        setFlights(data)
        // console.log(data);
      })
  }, [])

  return (

    <div>
      <h1 style={{ textAlign: 'center', color: 'darkblue' }}>All Flights</h1>

      <div class="dropdown ms-4">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Sort Flight Schedule <span className="badge bg-secondary">{flights.length}</span>
        </button>
        {/* To show total numbers of flights  {flights.length}*/}



        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li onClick={() => { sort(1) }}><a class="dropdown-item" href="#">A-Z</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
       
        </ul>
      </div>
      <div className="container-fluid">
        <br />

        <div className="row">
          {flights.map((f) => (
            
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={f.flightName}>
              <FlightItems
                flightName={f.flightName}
                departureAirport={f.departureAirport}
                arrivalAirport={f.arrivalAirport}
                departureTime={f.departureTime}
                arrivalTime={f.arrivalTime}
                availableSeats={f.availableSeats}
                // Sort
                onSelectFlight={handleSelectFlight}

              />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Flight