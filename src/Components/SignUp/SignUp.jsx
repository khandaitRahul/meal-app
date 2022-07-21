import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Signup.css'



const SignUp = () => {

  // navigate to login page
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate("/")
  }

  // onchange and onclick function to store data
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSignUp = () => {
    console.log("Signup")
    let Data = {
      "email": email,
      "password": password
    }
    axios({
      method: "POST",
      url: "https://reqres.in/api/register",
      data: Data
    })
      .then(res => {
        console.log(res.data)
        navigate("/")
      })
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <div className="container-fluid signup-section">
      <div className="h-50 signup-body">
        <input className="form-control mt-4" placeholder="Enter ur name" onChange={(e) => handleName(e)} />
        <input className="form-control my-2" placeholder="Enter ur email" onChange={(e) => handleEmail(e)} />
        <input className="form-control" placeholder="enter ur password" type="password" onChange={(e) => handlePassword(e)} />
        <div className="text-center">
          <button className="btn btn-danger mt-3" onClick={handleSignUp}>Sign up</button>
        </div>
        <div className="text-center mt-5 ">
          <h6 className="fw-bold">if u already have an account then !</h6>
          <button className="btn btn-sm btn-secondary fw-bold" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp;