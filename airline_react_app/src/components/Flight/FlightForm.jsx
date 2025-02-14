import React, { useEffect, useState } from 'react';
import { addFlightDetails, updateFlight } from '../../services/FlightService';

function FlightForm({ onAddFlight, selectedFlight, onUpdateFlight }) {
  const [flight, setFlight] = useState({
    flightNumber: '',
    flightName: '',
    departureAirport: '',
    arrivalAirport: '',
    departureTime: '',
    arrivalTime: '',
    // availableSeats: ''
  });

  const [showForm, setShowForm] = useState(false); // State to control form visibility

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addFlightDetails({
      flightNumber: e.target.flightNumber.value,
      flightName: e.target.flightName.value,
      departureAirport: e.target.departureAirport.value,
      arrivalAirport: e.target.arrivalAirport.value,
      departureTime: e.target.departureTime.value,
      arrivalTime: e.target.arrivalTime.value,
      // availableSeats: e.target.availableSeats.value
    }).then(data => {
      onAddFlight();
      setFlight({
        flightNumber: '',
        flightName: '',
        departureAirport: '',
        arrivalAirport: '',
        departureTime: '',
        arrivalTime: '',
        // availableSeats: ''
      });
      return data;
    });
  };

  // useEffect(() => {
  //   if (selectedFlight) setFlight(selectedFlight);
  // }, [selectedFlight]);

  useEffect(() => {
    if (selectedFlight) {
      setFlight(selectedFlight);
    } else {
      setFlight({
        flightNumber: '',
        flightName: '',
        departureAirport: '',
        arrivalAirport: '',
        departureTime: '',
        arrivalTime: '',
      });
    }
  }, [selectedFlight]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlight((prevFlight) => ({ ...prevFlight, [name]: value }));
  };

  const updateHandler = (e) => {
    e.preventDefault();
    updateFlight(selectedFlight["_links"]["self"]["href"], {
      flightNumber: e.target.flightNumber.value,
      flightName: e.target.flightName.value,
      departureAirport: e.target.departureAirport.value,
      arrivalAirport: e.target.arrivalAirport.value,
      departureTime: e.target.departureTime.value,
      arrivalTime: e.target.arrivalTime.value,
      // availableSeats: e.target.availableSeats.value
    }).then(data => {
      onUpdateFlight();
      setFlight({
        flightNumber: '',
        flightName: '',
        departureAirport: '',
        arrivalAirport: '',
        departureTime: '',
        arrivalTime: '',
        // availableSeats: ''
      });
      onUpdateFlight(null); // Reset selectedFlight so the form switches to Submit

    });
  };

  return (
    <div className="container">
      <button className="btn btn-primary mb-3" onClick={toggleForm}>
        {showForm ? "Hide Form" : "Show Form"}
      </button>

      {showForm && (
        <form className='border border-2 p-4' onSubmit={selectedFlight ? updateHandler : submitHandler}>
          <h1 className='bg-primary p-3 text-white text-center'>
            {selectedFlight ? "Update Flight" : "Add Flight"}
          </h1>

          <div className="mb-3">
            <label className="form-label">Flight Number</label>
            <input type="number" className="form-control" name='flightNumber'
             value={flight.flightNumber} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Flight Name</label>
            <input type="text" className="form-control" name='flightName' 
            value={flight.flightName} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Departure Airport</label>
            <input type="text" className="form-control" name='departureAirport' 
            value={flight.departureAirport} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Arrival Airport</label>
            <input type="text" className="form-control" name='arrivalAirport'
             value={flight.arrivalAirport} onChange={handleChange}  required/>
          </div>

          <div className="mb-3">
            <label className="form-label">Departure Date&Time</label>
            <input type="datetime-local" className="form-control" name='departureTime'
             value={flight.departureTime} onChange={handleChange} required/>
          </div>

          <div className="mb-3">
            <label className="form-label">Arrival Date&Time</label>
            <input type="datetime-local" className="form-control"
             name='arrivalTime' value={flight.arrivalTime} onChange={handleChange} required/>
          </div>

          {/* <div className="mb-3">
            <label className="form-label">Available Seats</label>
            <input type="number" className="form-control" name='availableSeats' 
            value={flight.availableSeats} onChange={handleChange} />
          </div> */}

          <button type="submit" className="btn btn-success">
            {selectedFlight ? "Update" : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
}

export default FlightForm;
