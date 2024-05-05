import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userService from "../services/userService";
import "../styles/Register.css";

const Register = () => {
  const initialState = { username: "", email: "", password: "" };
  const [registerDetails, setRegisterDetails] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterDetails({ ...registerDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userService.register(registerDetails);
      console.log(response);
      alert("Registration successful! Please proceed to login.");
      setRegisterDetails(initialState);
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Registration failed. Please check your details and try again.");
    }
  };

  return (
    <div className="register-page">
      <div className="register">
        <h1>User Registration</h1>
        <p>Please fill out the form to register.</p>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="inputs">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={registerDetails.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="inputs">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={registerDetails.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="inputs">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={registerDetails.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
