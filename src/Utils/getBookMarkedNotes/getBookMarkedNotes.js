function getBookMarkedNotes(notes) {
  return notes.filter((note) => note.starred === true);
}
export { getBookMarkedNotes };
