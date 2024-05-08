import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setUsername }) => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");

    setUsername("");
    navigate("/login");
  }, []);
  return <></>;
};

export default Logout;
