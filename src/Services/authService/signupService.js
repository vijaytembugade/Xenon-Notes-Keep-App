import axios from "axios";

export const signupService = async (email, password) => {
  try {
    const response = await axios.post("/api/auth/signup", {
      email: email,
      password: password,
    });
    console.log(response);
    return response;
  } catch (error) {
    return;
  }
};
