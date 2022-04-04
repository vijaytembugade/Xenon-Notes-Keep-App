import axios from "axios";

export const signupService = async (email, password) => {
  try {
    const responce = await axios.post("/api/auth/signup", {
      email: email,
      password: password,
    });
    console.log(responce);
    return responce;
  } catch (error) {
    return;
  }
};
