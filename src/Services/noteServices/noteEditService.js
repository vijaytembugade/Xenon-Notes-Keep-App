import axios from "axios";

export const noteEditService = async (note, token, _id) => {
  try {
    const responce = await axios.post(
      `/api/notes/${_id}`,
      {
        note: note,
      },
      {
        headers: { authorization: token },
      }
    );

    console.log(responce);
    return responce;
  } catch (error) {
    console.log(error);
    return;
  }
};
