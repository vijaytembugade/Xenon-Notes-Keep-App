import axios from "axios";

export const noteDeleteService = async (note, token) => {
  try {
    const response = await axios.delete(`/api/notes/${note._id}`, {
      headers: { authorization: token },
    });
    return response;
  } catch (error) {
    console.error(error);
    return;
  }
};
