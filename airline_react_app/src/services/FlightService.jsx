

const API_LINK = "http://localhost:8080/flights";


export const getFlightDetails = ()=>{

    return fetch(API_LINK)
    .then(data=>data.json())
    .then(data=>data._embedded.flights)

}