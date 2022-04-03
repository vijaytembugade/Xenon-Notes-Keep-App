import axios from "axios";

export const noteEditService = async (note, token) => {
  try {
    const responce = await axios.post(
      `/api/notes/${note._id}`,
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
