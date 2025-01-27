import React, { useState } from 'react'
import { addFlightDetails } from '../../services/FlightService'

function FlightForm() {

    let[flight,setFlight]=useState(null)

    const submitHandler =(e)=>{

        e.preventDefault();
        addFlightDetails({
            flightNumber:e.target.flightNumber.value,
            flightName:e.target.flightName.value,
            departureAirport:e.target.departureAirport.value,
            arrivalAirport:e.target.arrivalAirport.value,
            departureTime:e.target.departureTime.value,
            arrivalTime:e.target.arrivalTime.value,
            availableSeats:e.target.availableSeats.value
        })
        .then(data=>{

            setFlight(data);
        })
    }
  return (
    <div>
         <form  className='container border border-2 p-4' onSubmit={submitHandler}> {/**onSubmit={selectedProduct?updateHandler:submitHandler} */}
                {/* Product Id*/}
                <h1 className='bg-primary p-3 text-white text-center'>Add Flights</h1>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">flightNumber</label>
                    <input type="number" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='flightNumber'
                          /> 
                    {/*Assigning Name is very imp coz we get data through it  */}
                    {/* value={product.productId} , value that will be shown on input box  */}
                </div>

                {/* Product Name */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label"> flightName</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='flightName'
                        />
                        {/* productName input box kaa name hai */}

                </div>

                {/* Product Desc */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">departureAirport</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='departureAirport'
                      />

                </div>

                {/* Product Price */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">arrivalAirport</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='arrivalAirport' 
                        />

                </div>

                  {/* Product Price */}
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">departureTime</label>
                    <input type="datetime-local" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='departureTime' 
                        />

                </div>

                  {/* Product Price */}
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">arrivalTime</label>
                    <input type="datetime-local" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='arrivalTime' 
                        />

                </div>

                  {/* Product Price */}
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">availableSeats</label>
                    <input type="number" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name='availableSeats' 
                        />

                </div>

                
              
                {/* Button to submit form */}
                {/* {flight? <button type="submit" className="btn btn-primary">Update</button>: */}
                 <button type="submit" className="btn btn-primary">Submit</button>

               </form>
               <br />
               <br />
    </div>
  )
}

export default FlightForm