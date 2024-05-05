import React, { useState } from "react";
import userService from "../services/userService";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { Link } from "react-router-dom";

const Login = ({ setUsername }) => {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateUser(loginDetails);
    setLoginDetails({ email: "", password: "" });
  };

  const parseJwt = (token) => {
    if (!token) return;
    const base64url = token.split(".")[1];
    console.log(base64url);
    console.log(JSON.parse(window.atob(base64url)));
    return JSON.parse(window.atob(base64url));
  };

  const validateUser = async (user) => {
    try {
      const response = await userService.login(user);
      console.log(response);
      console.log(response.data);
      const token = response.data;

      console.log(parseJwt(token));
      let userData = parseJwt(token);

      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("userData", userData.username);
      setUsername(userData.username);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="login-page">
        <div className="login">
          <h1>Login Page</h1>
          <form className="login-form" action="" onSubmit={handleSubmit}>
            <div className="inputs">
              <label htmlFor="email">Email </label>
              <input
                type="email"
                name="email"
                placeholder="enter your email"
                value={loginDetails.email}
                onChange={handleChange}
              />
            </div>
            <div className="inputs">
              <label htmlFor="password">Password </label>
              <input
                type="password"
                name="password"
                placeholder="enter your password"
                value={loginDetails.password}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="login-btn">Login </button>
            <div className="newaccount">
              <p>Create new account </p>
              <p>
                <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
