import axios from "axios";

const register = (user) => {
  return axios.post("http://localhost:6000/user/register", user);
};

const login = (user) => {
  return axios.post("http://localhost:6000/user/login", user);
};

const userService = {
  register,
  login,
};

export default userService;
