import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSignup } from "../redux/action/templateaction";

export default function SignUp(props) {
  const {response} = useSelector(state=>state?.getSignup)
  const [username,setUsername]=useState(null);
  const [password,setPassword]=useState(null);
  const [email,setEmail]=useState(null);
  const [address,setAddress]=useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleClick = (e)=>{
    e.preventDefault();
    dispatch(getSignup(username,email,password,address));
    navigate('/login')
  }
  const handleChange=(e,id)=>{
    switch(id){
      case "email":
        setEmail(e.target.value)
        break;
      case "password":
        setPassword(e.target.value);
        break
      case "address":
        setAddress(e.target.value)
        break
      case "username":
        setUsername(e.target.value)
        break
      default:
        break
    }
  }
  return (
    <div className="text-center pt-2 signup-page">
        <span className="readers-label">Sign up to learn more</span>
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
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onKeyUp={(e)=>handleChange(e,"email")}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
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

          <div className="mb-3">
            <label for="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              aria-describedby="emailHelp"
              onKeyUp={(e)=>handleChange(e,"address")}
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
