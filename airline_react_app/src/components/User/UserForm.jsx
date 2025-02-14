import React, { useEffect, useState } from 'react'
import { addUser, getUsers, uploadUserImage } from '../../services/UserService'
import logo from '../../assests/ticketCounter.jpg'



function UserForm() {

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
            console.log(data._links.self.href, e.target.userImage.files[0]);
           uploadUserImage(data._links.self.href, e.target.userImage.files[0])
            setUser(data);
           
            return data;
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


                        <form class="container border border-2 border-dark "  autocomplete="on" onSubmit={submitHandler}>


                            <h3 className='   text-center'>Registration Form</h3>
                            {/* First Name */}
                            <div class="mb-2">
                                <label for="exampleInputEmail1" class="form-label">Enter FirstName</label>
                                <input type="text" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" name="firstName" required />
                                

                            </div>

                            {/* Last Name */}
                            <div class="mb-2">
                                <label for="exampleInputEmail1" class="form-label">Enter LastName</label>
                                <input type="text" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" name="lastName" required/>

                            </div>

                            {/* Email */}
                            <div class="mb-2">
                                <label for="exampleInputEmail1" class="form-label">Enter Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" name="emailId" autocomplete="off" required/>

                            </div>

                            {/* Password */}
                            <div class="mb-2">
                                <label for="exampleInputEmail1" class="form-label">Enter Password</label>
                                <input type="password" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" name="password" required/>

                            </div>

                            {/* Age */}
                            <div class="mb-2">
                                <label for="exampleInputEmail1" class="form-label">Enter Age</label>
                                <input type="number" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" name="age" required />

                            </div>

                            {/* Image */}
                            <div class="mb-2">
                                <label for="exampleInputEmail1" class="form-label">Profile Picture</label>
                                <input type="file" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" name="userImage" />

                            </div>



                            {/* Terms and Conditions (Updated) */}
                            <div className="col-12 mb-3">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="invalidCheck2"
                                        required
                                    />
                                    <label htmlFor="invalidCheck2" className="form-check-label">
                                        Agree to terms and conditions
                                    </label>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="btn btn-primary register mb-2 btn-lg ">Register</button>

                        </form>

                    </div>
                    

                </div>
            </div>







        </div>
    )
}

export default UserForm