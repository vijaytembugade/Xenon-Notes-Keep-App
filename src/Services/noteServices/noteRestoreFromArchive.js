import axios from "axios";

export const noteRestoreFromArchive = async (note, token) => {
  try {
    const responce = await axios.post(
      `/api/archives/restore/${note._id}`,
      {},
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
