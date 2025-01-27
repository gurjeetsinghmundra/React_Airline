

const API_LINK = "http://localhost:8080/flights";


export const getFlightDetails = ()=>{

    return fetch(API_LINK)
    .then(data=>data.json())
    .then(data=>data._embedded.flights)

}

export const addFlightDetails =(flight)=>{

    return fetch(API_LINK,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(flight)
    }).then(data=>data.json())
    .then(data=>data)
}

// Sorting

export const getFlightsAtoZ = ()=>{

    return fetch("http://localhost:8080/flights/search/findByOrderByFlightNameAsc")
    .then(data=>data.json())
    .then(data=>data["_embedded"]["flights"])

}
    