import axios from "axios";

export const noteArchiveService = async (note, token) => {
  try {
    const response = await axios.post(
      `/api/notes/archives/${note._id}`,
      {
        note,
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
