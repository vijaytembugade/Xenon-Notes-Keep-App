import axios from "axios";

export const noteBookMarkService = async (note, token) => {
  try {
    const responce = await axios.post(
      `/api/notes/${note._id}`,
      {
        note: { ...note, starred: !note.starred },
      },
      {
        headers: { authorization: token },
      }
    );
    return responce;
  } catch (error) {
    console.log(eror);
    return;
  }
};
