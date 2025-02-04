import React, { useEffect, useState } from 'react'
import { getUsers } from '../../services/UserService';
import AllUser from './AllUser';

function Users() {


    let [users, setUsers] = useState([]);


    useEffect(() => {
        getUsers()
            .then(data => {
                setUsers(data)
                console.log(data);
            })
            .catch(error => console.error("Error fetching users:", error));

    }, [])


  return (
    <div>
        {users.map((u) =>(
                <AllUser
                firstName={u.firstName}
                />

))}
    </div>
  )
}

export default Users