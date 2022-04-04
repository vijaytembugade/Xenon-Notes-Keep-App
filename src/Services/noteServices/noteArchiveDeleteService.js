import axios from "axios";

export const noteArchiveDeleteService = async (note, token) => {
  try {
    const responce = await axios.delete(`/api/archives/delete/${note._id}`, {
      headers: { authorization: token },
    });
    return responce;
  } catch (error) {
    console.log(error);
    return;
  }
};
