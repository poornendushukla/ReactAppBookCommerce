import React, { useEffect, useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import {  useNavigate } from "react-router-dom";
import { getLogin } from "../redux/action/templateaction"
import "../styles/login.scss"
function Login(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {responseLogin}=useSelector(state=>state?.getSignup);
  const [username,setUsername]=useState(null)
  const [password,setPassword]=useState(null)
  useEffect(()=>{
    if(!localStorage.getItem('username'))
      document.querySelector(".error").innerHTML="You need to login to add books to cart !!"
      document.querySelector(".error").style.display="block"
    if(responseLogin===200){
      navigate("/")
    }
  },[responseLogin])
  const handleChange = (e,id)=>{
      switch(id){
        case "username":
          setUsername(e.target.value)
          break
        case "password":
          setPassword(e.target.value)
          break
        default:
          break
      }
  }
  const handleClick =  (e)=>{
    e.preventDefault();
    dispatch(getLogin(username,password))
    if(localStorage.getItem("username")|| responseLogin==200){
      document.querySelector(".error").style.display="none";
      navigate("/")
    }else{
      document.querySelector(".error").innerHTML="Invalid Credentials Try Again !!"
       document.querySelector(".error").style.display="block";
    }
  }
  return (
    <div className="text-center pt-2 signup-page">
      <span className="readers-label">Log in</span>
      <div className="signup-box">
        <form className="form" key="form">
          <div className="mb-3">
            <label for="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
              onKeyUp={(e)=>handleChange(e,"username")}
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onKeyUp={(e)=>handleChange(e,"password")}

            />
          </div>
          <button type="submit" className="btn btn-primary button" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
      <div className="error"></div>
    </div>
  );
}

export default Login;
