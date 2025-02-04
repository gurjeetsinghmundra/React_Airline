import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import './FlightDetails.css';
import BookingSeats from "../Booking/BookingSeats";
import { addPassenger, allocateSeat } from "../../services/PassengerService";

function FlightDetails({}) {

  const navigate=useNavigate()


  const [flight, setFlight] = useState(null);
  const { flightNumber } = useParams();
  const [numberOfSeats, setNumberOfSeats] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedSeatForPassenger,setSelectedSeatForPassenger]=useState(null)
  const [passengerDetails, setPassengerDetails] = useState({
    passengerFirstName: "",
    passengerLastName: "",
    dateOfBirth: "",
    gender: "",
    passportNumber: "",
    nationality: "",
    phoneNumber: "",
    address: "",
  });

  useEffect(() => {
    const fetchFlight = async () => {
      try {
        const response = await fetch(`http://localhost:8080/flights/${flightNumber}`);
        const data = await response.json();
        setFlight(data);
      } catch (error) {
        console.error("Error fetching flight details:", error);
      }
    };
    fetchFlight();
  }, [flightNumber,selectedSeatForPassenger]);

  if (!flight) {
    return <div className="loading">Loading flight details...</div>;
  }

  const {
    flightName,
    departureAirport,
    arrivalAirport,
    departureTime,
    arrivalTime,
    availableSeats,
  } = flight;

  const handleBookFlight = () => {
    setShowBookingForm(true);
  };

  const handleCloseBookingForm = () => {
    setShowBookingForm(false);
  };

  const handleInputChange = (e) => {
    setPassengerDetails({ ...passengerDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Passenger Details:", passengerDetails);
  };

  const submitHandler = (e)=>
    {
        e.preventDefault(); //prevent webpage from refreshing
        addPassenger({
            // on left we have variables of eclipse
            // and on right we have form names
            passengerFirstName:e.target.passengerFirstName.value,
            passengerLastName:e.target.passengerLastName.value,
            dateOfBirth:e.target.dateOfBirth.value,
            gender:e.target.gender.value,
            passportNumber:e.target.passportNumber.value,
            nationality:e.target.nationality.value,
            phoneNumber:e.target.phoneNumber.value,
            address:e.target.address.value,


        }).then(data=>{
            // onAddPassenger();
            allocateSeat(data._links.self.href,`http://localhost:8080/seats/${selectedSeatForPassenger}`)

            return data;
        })
  setShowBookingForm(false);

    }




  return (
    <div className="flight-booking-container">
      <div className="flight-details-wrapper">
        {/* Left Side - Seat Booking */}
        <div className="booking-seats-container">
          <BookingSeats flightId={flightNumber} setNumberOfSeats={setNumberOfSeats} setSelectedSeatForPassenger={setSelectedSeatForPassenger} />
        </div>

        {/* Right Side - Flight Details */}
        <div className="flight-details-card">
          <div className="card1">
            <div className="card-body1">
              <h2 className="flights-title">{flightName}</h2>
              <h4 className="flights-route">
                {departureAirport} ➝ {arrivalAirport}
              </h4>
              <p className="flights-time">
                <strong>Departure:</strong> {departureTime} <br />
                <strong>Arrival:</strong> {arrivalTime}
              </p>
            </div>
            <div className="card-footer1">
              <strong>Available Seats: {numberOfSeats}</strong><br /><br />
              
              <button className="btn btn-primary "  onClick={()=>{navigate(`/booking/${flightNumber}`)}}>Show Bookings</button>
             
              <button className="btn btn-primary ms-5" onClick={handleBookFlight}>
                Book Flight
              </button>
            </div>
          </div>

          {/* Booking Form Below the "Book Flight" Button */}
          {showBookingForm && (
            <div className="booking-form">
              <h2>Passenger Details</h2>
              <form onSubmit={submitHandler}>
                <input
                  type="text"
                  name="passengerFirstName"
                  placeholder="First Name"
                  value={passengerDetails.passengerFirstName}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="passengerLastName"
                  placeholder="Last Name"
                  value={passengerDetails.passengerLastName}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="date"
                  name="dateOfBirth"
                  value={passengerDetails.dateOfBirth}
                  onChange={handleInputChange}
                  required
                />
                <select
                  name="gender"
                  value={passengerDetails.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="text"
                  name="passportNumber"
                  placeholder="Passport Number"
                  value={passengerDetails.passportNumber}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="nationality"
                  placeholder="Nationality"
                  value={passengerDetails.nationality}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={passengerDetails.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={passengerDetails.address}
                  onChange={handleInputChange}
                  required
                />

                <button type="submit">Confirm Booking</button>
                <button type="button" onClick={handleCloseBookingForm}>
                  Cancel
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FlightDetails;
