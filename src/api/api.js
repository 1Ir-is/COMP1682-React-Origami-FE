import axios from "axios";

const baseURL = "http://localhost:9999/api";

const axiosClient = axios.create({
  baseURL,
  withCredentials: true,
});

const origamiAPI = {
  getAllOrigami: () => {
    return axiosClient.get("/origami/all");
  },

  getMyOrigami: () => {
    return axiosClient.get("/origami/mine");
  },

  createOrigami: (origamiData) => {
    return axiosClient.post("/origami/", origamiData);
  },
};

const userAPI = {
  registerUser: (userData) => {
    return axiosClient.post("/user/register", userData);
  },

  loginUser: (loginData) => {
    return axiosClient.post("/user/login", loginData);
  },

  logoutUser: () => {
    return axiosClient.post("/user/logout");
  },
};

export { origamiAPI, userAPI };