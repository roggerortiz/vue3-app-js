import axios from 'axios';
import { getLocalAccessToken, getLocalRefreshToken, updateLocalAccessToken } from '../utils/token';

const instance = axios.create({
   baseURL: 'http://localhost:4000/api',
   headers: {
      "Content-Type": "application/json"
   },
});

instance.interceptors.request.use(
   (config) => {
      const token = getLocalAccessToken();
      if (token) config.headers["Authorization"] = `Bearer ${token}`;
      return config;
   },
   (err) => Promise.reject(err)
);

instance.interceptors.response.use(
   (res) => res.data.data,
   async (err) => {
      const originalConfig = err.config
      if (err.response.status === 401 && !originalConfig._retry) {
         originalConfig._retry = true;
         try {
            const result = await instance.post("auth/refreshtoken", {
               refreshToken: getLocalRefreshToken()
            });
            const { accessToken } = result.data;
            updateLocalAccessToken(accessToken);
            return instance(originalConfig);
         } catch (error) {
            return Promise.reject(error);
         }
      }
      return Promise.reject(err);
   }
);

export default instance;