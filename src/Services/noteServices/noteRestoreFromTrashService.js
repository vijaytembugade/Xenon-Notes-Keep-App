import axios from "axios";

export const noteRestoreFromTrashService = async (note, token) => {
  try {
    const response = await axios.post(
      `/api/notes/${note._id}`,
      {
        note: { ...note, inTrash: false },
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
