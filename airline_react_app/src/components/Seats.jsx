import React from 'react'

function Seats() {
  return (
    <div>
         <section class="section__container booking__container">
      <div class="booking__nav" id="flights">
       
        <span>Search For Flights</span>
      </div>
      <form >
        <div class="form__group">
          <span><i class="ri-map-pin-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="text" /> 
              {/* {/* current input box kaa target value fetch karega */}
              <label>From</label>
            </div>
            <p>Where are you flying from?</p>
          </div>
        </div>
        <div class="form__group">
          <span><i class="ri-map-pin-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="text"  />
              <label>To</label>
            </div>
            <p>Where are you going?</p>
          </div>
        </div>
        <div class="form__group">
          <span><i class="ri-calendar-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="date"   />
              {/* <label>Departure Date</label> */}
            </div>
            <p>Add Departure Date</p>
          </div>
        </div>
        <div class="form__group">
          <span><i class="ri-calendar-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="date"  />
              {/* <label>Return Date</label> */}
            </div>
            {/* <p>Add date</p> */}
            <p>Add Return Date</p>

          </div>
        </div>
        <button type='submit' class="btn"><i class="ri-search-line"></i></button>
      </form>
    </section>

      
    </div>
  )
}

export default Seats
