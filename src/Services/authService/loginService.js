import axios from "axios";

export const loginService = async (email, password) => {
  try {
    const responce = await axios.post("/api/auth/login", {
      email: email,
      password: password,
    });
    return responce;
  } catch (error) {
    return;
  }
};
