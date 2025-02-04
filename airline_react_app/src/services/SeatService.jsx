

const API_Link="http://localhost:8080/seats"


export const getSeats = (id)=>{
    return fetch(`http://localhost:8080/flights/${id}/seats`)
    .then(data=>data.json())
    .then(data=>data._embedded.seats)
}


