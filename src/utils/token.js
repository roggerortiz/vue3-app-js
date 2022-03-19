export const getLocalRefreshToken = () => {
   const user = JSON.parse(localStorage.getItem("user"));
   return user?.refreshToken;
};

export const getLocalAccessToken = () => {
   // const user = JSON.parse(localStorage.getItem("user"));
   // return user?.accessToken;
   return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJzIjoiNjIxNDJmMjlhYTFkZDRiMmM3OThkY2UxIiwibmFtZSI6IlJvZ2dlciBPcnRpeiIsInVzZXJuYW1lIjoicm9ydGl6IiwiZW1haWwiOiJyb2dnZXIub3J0aXouYnJAZ21haWwuY29tIiwicmVmcmVzaFRva2VuIjoiOGJhOWY4YjdkNDM2NDc3ZTk2NzY5OGNiZjZjNDQ2MjEiLCJpYXQiOjE2NDU1MjI5NzgsImV4cCI6MTY0NTYwOTM3OH0.eZIDND-CT5h9ZCJFdKFny01UluVa9U3BArvO-mWK0zY";
};

export const updateLocalAccessToken = (token) => {
   let user = JSON.parse(localStorage.getItem("user"));
   user.accessToken = token;
   localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = () => {
   return JSON.parse(localStorage.getItem("user"));
};

export const setUser = (user) => {
   localStorage.setItem("user", JSON.stringify(user));
};

export const removeUser = () => {
   localStorage.removeItem("user");
};