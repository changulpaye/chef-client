import React from "react";
import "./signup.css";
import logo from "../../assets/images/logo.jpg";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();

  const handleSignUp = () => {
    history.replace('/signin');
  }
  
  return (
    <div className="signup-container">
      <img src={logo} className="logo-container" alt="logo" />
      <input className="user-input med-top-mar" placeholder="Username" />
      <input className="user-input med-top-mar" placeholder="Password" />
      <input className="user-input med-top-mar" placeholder="Confirm Password" />
      <button className="button" onClick={handleSignUp} > Sign Up </button>
    </div>
  );
};

export default SignUp;
