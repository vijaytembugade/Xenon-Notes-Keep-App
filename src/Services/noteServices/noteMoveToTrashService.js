import axios from "axios";

export const noteMoveToTrashService = async (note, token) => {
  try {
    const response = await axios.post(
      `/api/notes/${note._id}`,
      {
        note: { ...note, inTrash: true },
      },
      {
        headers: { authorization: token },
      }
    );

    return response;
  } catch (error) {
    console.log(error);
    return;
  }
};
