import axios from "axios";

export const noteRestoreFromArchive = async (note, token) => {
  try {
    const response = await axios.post(
      `/api/archives/restore/${note._id}`,
      {},
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
