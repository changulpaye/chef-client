import React from "react";
import './signin.css'
import logo from "../../assets/images/logo.jpg";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  
  const history = useHistory();

  /** Navigation upon successful login */
  const handleSignIn = () => {
    history.replace("/recipe-list");
  };

  return (
    <div className="signup-container">
      <img src={logo} className="logo-container" alt="logo" />
      <input className="user-input med-top-mar" placeholder="Username" />
      <input
        type="password"
        className="user-input med-top-mar"
        placeholder="Password"
      />
      <button className="button" onClick={handleSignIn}>
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
