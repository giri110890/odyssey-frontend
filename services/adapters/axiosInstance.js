import axios from "axios";
import Cookies from "js-cookie";
import AppConfig from "../../config/application.config";

const axiosInstance = axios.create( {
    baseURL: AppConfig.svc,
    withCredentials: true
});

axiosInstance.interceptors.request.use((config) => {
    const accessToken = Cookies.get('access_token');
    const permissionToken = Cookies.get('permissions');

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
        config.headers.permissions = `${permissionToken}`
      }
      return config;
    }, (error) => {
      return Promise.reject(error);
});

export default axiosInstance;
