import axios from "axios";

export const noteEditService = async (note, token, _id) => {
  try {
    const response = await axios.post(
      `/api/notes/${_id}`,
      {
        note: note,
      },
      {
        headers: { authorization: token },
      }
    );

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return;
  }
};
