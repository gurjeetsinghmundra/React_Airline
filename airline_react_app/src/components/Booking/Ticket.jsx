import React from "react";
import "./Ticket.css";
// import flightIcon from '../../assests/ticket.webp'

const Ticket = () => {
  return (
    <div className="ticket">
      <div className="header">
        <div className="airline-logo">
          <img src="your_logo.png" alt="Airline Logo" /> {/* Replace with your logo */}
          <div className="airline-name">
            <p>INDIGO</p>
            <p>Economy Class</p>
          </div>
        </div>
        <div className="flight-info">
          <p className="flight-number">202</p>
          <p className="prn">PRN: 40520240031</p>
        </div>
      </div>

      <div className="main-info">
        <div className="passenger-info">
          <p className="passenger-name">MR. GANESH MALI</p>
          <p className="board-time">Boarding Time: 21:05</p>
        </div>
        <div className="route-info">
          <div className="route">
            <p className="departure">NASHIK (NSK) <span>(21:20)</span></p>
            <p className="arrival">MUMBAI (BOM) <span>(22:40)</span></p>
          </div>
          <p className="date">2024-05-04</p>
        </div>
      </div>

      <div className="footer">
        <p className="footer-message">
          Thank you for choosing us. Please be at the gate at boarding time.
        </p>
      </div>
    </div>
  );
};


export default Ticket;
