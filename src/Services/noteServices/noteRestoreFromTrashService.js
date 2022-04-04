import axios from "axios";

export const noteRestoreFromTrashService = async (note, token) => {
  try {
    const responce = await axios.post(
      `/api/notes/${note._id}`,
      {
        note: { ...note, inTrash: false },
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
