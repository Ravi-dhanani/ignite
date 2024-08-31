import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "https://iyh-api.eastus2.cloudapp.azure.com",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("accessToken");
    const refresh_token = Cookies.get("refresh_token");

    if (accessToken === undefined) {
      var token = {
        refreshToken: refresh_token,
      };
      axios
        .post(
          "https://iyh-api.eastus2.cloudapp.azure.com/user/login/refresh-token",
          token
        )
        .then((response) => {
          Cookies.set("accessToken", response?.data?.data?.access_token, {
            expires: 1 / 24,
          });
          Cookies.set("refresh_token", response?.data?.data?.refresh_token);
          config.headers[
            "Authorization"
          ] = `Bearer ${response?.data?.data?.access_token}`;
        });
    } else {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

api.interceptors.response.use(
  (response) => response.data,
  (err) => {
    return Promise.reject(err);
  }
);

export default api;
