

const API_Link="http://localhost:8080/seats"


export const getSeats = (id)=>{
    return fetch(`http://localhost:8080/flights/${id}/seats`)
    .then(data=>data.json())
    .then(data=>data._embedded.seats)
}


export const updateSeat = (seat_id_link,seat)=>{
    return fetch(seat_id_link,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(seat)
    })
}