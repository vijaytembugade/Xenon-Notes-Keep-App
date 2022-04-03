import axios from "axios";

export const noteSaveService = async (note, token) => {
  try {
    const responce = await axios.post(
      "/api/notes",
      {
        note,
      },
      {
        headers: { authorization: token },
      }
    );
    return responce;
  } catch (error) {
    console.log(error);
    return;
  }
};
