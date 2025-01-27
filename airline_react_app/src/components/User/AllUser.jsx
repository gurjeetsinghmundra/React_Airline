import React from 'react'

function AllUser({firstName,lastName}) {
    return (
        <div>

            <h1>All Users:</h1>
            <div class="card allUser" >
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{firstName}</h5>
                    <p class="card-text">{lastName}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>

        </div>
    )
}

export default AllUser