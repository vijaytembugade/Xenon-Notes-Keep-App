export const getNoNBookMarkedNotes = (notes) => {
  return notes.filter((note) => note.starred === false);
};
