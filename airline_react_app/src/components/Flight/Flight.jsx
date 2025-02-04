import React, { useEffect, useState } from 'react';
import '../../services/FlightService';
import { getFlightDetails, getFlightsAtoZ, getFlightsZtoA } from '../../services/FlightService';
import FlightItems from './FlightItems';
import './FlightCard.css';
import FlightForm from './FlightForm';
import SearchFlight from './SearchFlight';

function Flight() {
  let [flights, setFlights] = useState([]);
  let [selectedFlight, setSelectedFlight] = useState(null); // for selected flight
  let [searchQuery, setSearchQuery] = useState({
    from: '',
    to: '',
    departureDate: '',
    returnDate: ''
  });

  const handleSelectFlight = (selectedFlight) => {
    setSelectedFlight(selectedFlight);
    console.log(selectedFlight);
  };

  const sort = async (choice) => {
    switch (choice) {
      case 1:
        setFlights(await getFlightsAtoZ());
        break;
      case 2:
        setFlights(await getFlightsZtoA());
        break;
      default:
        setFlights(await getFlightDetails());
        break;
    }
  };

  useEffect(() => {
    getFlightDetails().then((data) => {
      setFlights(data);
    });
  }, []);

  // To refresh all flights when you add a new flight
  const refreshFlights = () => {
    getFlightDetails().then((data) => {
      setFlights(data);
    });
  };

  // Filter flights based on search query
  const filteredFlights = flights.filter((f) => {
    return (
      (searchQuery.from ? f.departureAirport.toLowerCase().includes(searchQuery.from.toLowerCase()) : true) &&
      (searchQuery.to ? f.arrivalAirport.toLowerCase().includes(searchQuery.to.toLowerCase()) : true) &&
      (searchQuery.departureDate ? f.departureTime.includes(searchQuery.departureDate) : true) &&
      (searchQuery.returnDate ? f.arrivalTime.includes(searchQuery.returnDate) : true)
    );
  });

  return (
    <div>
      <div>
        <FlightForm
          onAddFlight={refreshFlights}
          selectedFlight={selectedFlight}
          onUpdateFlight={refreshFlights}
        />
      </div>

      <h1 style={{ textAlign: 'center', color: 'darkblue' }}>All Flights</h1>

      <div className="dropdown ms-4">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Sort Flight Schedule <span className="badge bg-secondary">{flights.length}</span>
        </button>
        <br />
        <br />
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li onClick={() => { sort(1) }}><a className="dropdown-item">A-Z</a></li>
          <li onClick={() => { sort(2) }}><a className="dropdown-item">Z-A</a></li>
        </ul>
      </div>

      <SearchFlight setSearchQuery={setSearchQuery} />

      <div className="container-fluid">
        <br />
        <div className="row">
          {filteredFlights.map((f) => (
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={f.id}>
              <FlightItems
                // 
                flightNumber={f.flightNumber}
                // 
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

export default Flight;
