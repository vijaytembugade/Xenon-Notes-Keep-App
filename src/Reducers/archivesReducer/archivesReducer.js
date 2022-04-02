import { SET_ARCHIVES } from "../../Constants/ArchivesConstants/archives-constants";

export const archiveReducer = (state, action) => {
  switch (action.type) {
    case SET_ARCHIVES: {
      return { ...state, archives: action.payload };
    }
  }
};
