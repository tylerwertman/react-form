import React, { useState } from 'react'

const Form = () => {

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
// const [age, setAge] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [password2, setPassword2] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, age, email)
}

    return (
        <div>
            <form action="" className="form col-md-4 mx-auto" onSubmit={(handleSubmit)}>
                <h1>Please fill out this form!</h1>
                <div className="form-group mt-3 flex">
                    <label htmlFor="" className="form-label">First Name: </label>
                    <input type="text" className="form-control" onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="" className="form-label">Last Name: </label>
                    <input type="text" className="form-control" onChange={(e)=>setLastName(e.target.value)} />
                </div>
                {/* <div className="form-group mt-3">
                    <label htmlFor="" className="form-label">Age: </label>
                    <input type="number" name="" id="" className="form-control" onChange={(e)=>setAge(e.target.value)} />
                </div> */}
                <div className="form-group mt-3">
                    <label htmlFor="" className="form-label">Email: </label>
                    <input type="email" name="" id="" className="form-control" onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="" className="form-label">Password: </label>
                    <input type="password" name="" id="" className="form-control" onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="" className="form-label">Confirm Password: </label>
                    <input type="password" name="" id="" className="form-control" onChange={(e)=>setPassword2(e.target.value)} />
                </div>
                <div>
                    <p className="mt-3">Your form data:</p>
                </div>
                <div>
                    <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                    <p>Confirm Password: {password2}</p>
                </div>
                {/* <button className="btn btn-success mt-3">Submit</button> */}
            </form>
        </div>
    )
}

export default Form