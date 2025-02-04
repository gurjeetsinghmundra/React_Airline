import React from 'react'

function AllUser({firstName,lastName}) {
    return (
        <div>

            <div className="col">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{firstName}</h5>
                    <p class="card-text">{lastName}</p>
                    {/* <p class="card-text">Price: {productPrice}</p> */}
                    
                </div>
            </div>
            </div>

        </div>
    )
}

export default AllUser