import axios from "axios";

const register = (user) => {
  console.log(user);
  return axios.post("http://localhost:8000/user/register", user);
};

const login = (user) => {
  console.log(user);
  return axios.post("http://localhost:8000/user/login", user);
};

const logout = {
  
}
const userService = {
  register,
  login,
};

export default userService;
