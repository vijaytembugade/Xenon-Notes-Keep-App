import axios from "axios";

export const noteDeleteService = async (note, token) => {
  try {
    const responce = await axios.delete(`/api/notes/${note._id}`, {
      headers: { authorization: token },
    });
    return responce;
  } catch (error) {
    console.error(error);
    return;
  }
};
