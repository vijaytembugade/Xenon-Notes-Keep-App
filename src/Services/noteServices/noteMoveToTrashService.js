import axios from "axios";

export const noteMoveToTrashService = async (note, token) => {
  try {
    const responce = await axios.post(
      `/api/notes/${note._id}`,
      {
        note: { ...note, inTrash: true },
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
