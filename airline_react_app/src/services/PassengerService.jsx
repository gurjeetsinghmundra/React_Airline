const API_LINK="http://localhost:8080/passengers" //its const so it cant be changed by others

// Get Passenger
export const getPassengerDetails = ()=>{
    return fetch(API_LINK)
    .then(data=>data.json())
    .then(data=>data._embedded.passengers)
}



export const getPassengerById = async (passenger_link) => {
    try {
        const response = await fetch(passenger_link);

        if (response.status === 200) {
            return await response.json(); // Properly parse JSON response
        } else {
            console.error("Error: Passenger not found, Status:", response.status);
            return null; // Return null if passenger is not found
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        return null; // Return null if fetch fails
    }
};




// Add Passenger
export const addPassenger = (passenger)=>{
    
    //    ( (product)=> ) assuming object of product will be given
    console.log(passenger)
    
        return fetch(API_LINK,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(passenger)
        }).then(data=>data.json())
        .then(data=>data)
        .catch(err=>console.log(err))
    
    }

// Allocate Seats

export const allocateSeat = (passengerLink, seatLink) => {
    console.log(passengerLink,seatLink)
    return fetch(passengerLink+"/seat", {
        method: "PUT",
        headers: { "Content-Type": "text/uri-list" },
        body: seatLink
    })
   
};



// getting id of seat
export const fetchSeatById =(seat_link)=>{
    return fetch(seat_link)
    .then(data=>data.json())
    .then(data=>data)
}