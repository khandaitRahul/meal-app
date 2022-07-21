import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'



const Login = () => {

  // navigate to signup page
  const navigate = useNavigate()
  const handleSignUp = () => {
    navigate('/signup')
  }

  // onchange and onclick function to store data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = () => {
    let Data = {
      "email": email,
      "password": password
    }
    axios({
      method: "POST",
      url: "https://reqres.in/api/login",
      data: Data
    })
      .then(res => {
        if (res.data) {
          window.localStorage.setItem("token", res.data.token)
        }
        navigate("/home")
      })
      .catch(err => {
        console.log(err)
      })
  }




  return (
    <div className="container-fluid login-section">
      <div className="h-50 login-body">
        {/* <h1 className="text-center fw-bold">LOGIN</h1> */}
        <input className="form-control mt-4 mb-2" placeholder="Enter E-mail/Ph.No." onChange={(e) => handleEmail(e)} />
        <input className="form-control" placeholder="Enter password" type="password" onChange={(e) => handlePassword(e)} />
        <div className="text-center">
          <button className="btn btn-danger mt-3" onClick={handleLogin}>Login</button>
          <div className="text-center mt-2 ">
            <a href="#" className="text-decoration-none text-light fw-bold">Forgot Password</a>
          </div>
          <div className="text-center mt-5">
            <h6 className="fw-bold">If u doesn't have an account then !</h6>
            <button className="btn btn-secondary btn-sm fw-bold" onClick={handleSignUp}>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;