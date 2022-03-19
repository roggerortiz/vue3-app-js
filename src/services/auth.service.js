import axios from "./axios";
import { removeUser, setUser } from "../utils/token";

export const register = (username, email, password) => {
   return axios.post("/auth/signup", { username, email, password });
};

export const login = (username, password) => {
   return axios
      .post("/auth/signin", {
         username,
         password
      })
      .then((response) => {
         if (response.data.accessToken) {
            setUser(response.data);
         }
         return response.data;
      });
};

export const logout = () => {
   removeUser();
};

export const getCurrentUser = () => {
   return JSON.parse(localStorage.getItem("user"));
};