import React, { useEffect, useState } from 'react'
import { addUser, getUsers } from './UserService'
import './UserForm.css';
import logo from '../../assests/ticketCounter.jpg'





function User() {

    let [user, setUser] = useState(null)


    const submitHandler = (e) => {

        e.preventDefault();
        addUser({
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            emailId: e.target.emailId.value,
            password: e.target.password.value,
            age: e.target.age.value
        }).then(data => {
            setUser(data);
        })
    }



    return (
        <div>

            <div class="ms-3">
                <div class="row">
                    <div class="col">
                    {user ? <div class="alert alert-primary alert-dismissible fade show container " role="alert">
                <strong> Welcome {user.firstName}</strong>  You Have Registered Successfully!!!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div> : <></>}


            <form class="container border border-2 border-dark " onSubmit={submitHandler}>


                <h3 className='   text-center'>Registration Form</h3>
                {/* First Name */}
                <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label">Enter FirstName</label>
                    <input type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name="firstName" />

                </div>

                {/* Last Name */}
                <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label">Enter LastName</label>
                    <input type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name="lastName" />

                </div>

                {/* Email */}
                <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label">Enter Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name="emailId" />

                </div>

                {/* Password */}
                <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label">Enter Password</label>
                    <input type="password" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name="password" />

                </div>

                {/* Age */}
                <div class="mb-2">
                    <label for="exampleInputEmail1" class="form-label">Enter Age</label>
                    <input type="number" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" name="age" />

                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary register mb-2 btn-lg ">Register</button>

            </form>

                    </div>
                    <div class="col">
                       <img src={logo} alt="" />
                    </div>

                </div>
            </div>


           




        </div>
    )
}

export default User