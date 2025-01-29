

const API_Link="http://localhost:8080/seats"


export const getSeats = ()=>{
    return fetch(API_Link)
    .then(data=>data.json())
    .then(data=>data._embedded.seats)
}