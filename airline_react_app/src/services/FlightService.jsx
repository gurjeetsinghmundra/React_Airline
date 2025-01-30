

const API_LINK = "http://localhost:8080/flights";


// Getting Flights Details

export const getFlightDetails = ()=>{

    return fetch(API_LINK)
    .then(data=>data.json())
    .then(data=>data._embedded.flights)

}

// AddingFlight In Cards

export const addFlightDetails =(flight)=>{

    return fetch(API_LINK,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(flight)
    }).then(data=>data.json())
    .then(data=>data)
}

// Deleting Flights 

export const deleteFlight =(flight_id_link)=>{

    return fetch(flight_id_link,{method:"DELETE"})
    .then(data=>data.json())
    .then(data=>data)

}




// Sorting (A-z)

export const getFlightsAtoZ = ()=>{

    return fetch("http://localhost:8080/flights/search/findByOrderByFlightNameAsc")
    .then(data=>data.json())
    .then(data=>{
        console.log(data["_embedded"]["flights"].length)
        return data["_embedded"]["flights"]})

}

// Sorting(z-A)

export const getFlightsZtoA = ()=>{

    return fetch("http://localhost:8080/flights/search/findByOrderByFlightNameDesc")
    .then(data=>data.json())
    .then(data=>data["_embedded"]["flights"])

}


// getting id of flight
export const getFlightById=(flight_link)=>{
    return fetch(flight_link)
    .then(data=>data.json())
    .then(data=>data)
}

// Update

export const updateFlight = (flight_id_link,flight)=>{
    return fetch(flight_id_link,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(flight)
    })
}


