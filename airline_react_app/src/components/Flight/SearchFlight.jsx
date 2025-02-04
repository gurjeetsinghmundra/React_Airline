import React, { useState } from 'react';

function SearchFlight({ setSearchQuery }) {
  // Manage state for each input field
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchParams = { from, to, departureDate, returnDate };
    setSearchQuery(searchParams);  // Pass all search parameters to the parent
  };

  return (
    <div>
      <section className="section__container booking__container">
        <div className="booking__nav">
          
          <span>Search Flight</span>
        
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form__group">
            <span><i className="ri-map-pin-line"></i></span>
            <div className="input__content">
              <div className="input__group">
                <input 
                  type="text" 
                  value={from} 
                  onChange={(e) => setFrom(e.target.value)} 
                />
                {/* <label>From</label> */}
              </div>
              <p>Where are you flying from?</p>
            </div>
          </div>

          <div className="form__group">
            <span><i className="ri-map-pin-line"></i></span>
            <div className="input__content">
              <div className="input__group">
                <input 
                  type="text" 
                  value={to} 
                  onChange={(e) => setTo(e.target.value)} 
                />
                {/* <label>To</label> */}
              </div>
              <p>Where are you going?</p>
            </div>
          </div>

          <div className="form__group">
            <span><i className="ri-calendar-line"></i></span>
            <div className="input__content">
              <div className="input__group">
                <input 
                  type="date" 
                  value={departureDate} 
                  onChange={(e) => setDepartureDate(e.target.value)} 
                />
              </div>
              <p>Add Departure Date</p>
            </div>
          </div>

          <div className="form__group">
            <span><i className="ri-calendar-line"></i></span>
            <div className="input__content">
              <div className="input__group">
                <input 
                  type="date" 
                  value={returnDate} 
                  onChange={(e) => setReturnDate(e.target.value)} 
                />
              </div>
              <p>Add Return Date</p>
            </div>
          </div>

          <button type="submit" className="btn">
            <i className="ri-search-line"></i>
          </button>
        </form>
      </section>
    </div>
  );
}

export default SearchFlight;
