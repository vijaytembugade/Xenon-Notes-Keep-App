import axios from "axios";

const getAuthToken = () => {
  return localStorage.getItem("AUTH_TOKEN");
};

export const customAxios = axios.create({
  headers: {
    authorization: getAuthToken(),
  },
});
