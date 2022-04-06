import axios from "axios";

export const noteBookMarkService = async (note, token) => {
  try {
    const response = await axios.post(
      `/api/notes/${note._id}`,
      {
        note: { ...note, starred: !note.starred },
      },
      {
        headers: { authorization: token },
      }
    );
    return response;
  } catch (error) {
    console.log(eror);
    return;
  }
};
