function removeTrashedNotes(notes) {
  return notes.filter((note) => note.inTrash === false);
}

export { removeTrashedNotes };
