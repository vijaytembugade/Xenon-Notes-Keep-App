import axios from "axios";

export const noteArchiveDeleteService = async (note, token) => {
  try {
    const response = await axios.delete(`/api/archives/delete/${note._id}`, {
      headers: { authorization: token },
    });
    return response;
  } catch (error) {
    console.log(error);
    return;
  }
};
