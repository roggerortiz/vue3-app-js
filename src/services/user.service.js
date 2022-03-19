import axios from '../axios';

export const getUsers = () => {
   return axios.get("/user");
};

export const getUserById = (id) => {
   return axios.get(`/user/${id}`);
};

export const createUser = (user) => {
   return axios.post('/user', user);
};

export const updateUser = (user) => {
   return axios.put(`/user/${user.id}`, user);
};

export const deleteUser = (id) => {
   return axios.delete(`/user/${id}`);
};