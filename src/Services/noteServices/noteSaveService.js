import axios from "axios";

export const noteSaveService = async (note, token) => {
  try {
    const response = await axios.post(
      "/api/notes",
      {
        note,
      },
      {
        headers: { authorization: token },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return;
  }
};
