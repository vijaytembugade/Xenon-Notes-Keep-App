import axios from "axios";

export const loginService = async (email, password) => {
  try {
    const response = await axios.post("/api/auth/login", {
      email: email,
      password: password,
    });
    return response;
  } catch (error) {
    return;
  }
};
