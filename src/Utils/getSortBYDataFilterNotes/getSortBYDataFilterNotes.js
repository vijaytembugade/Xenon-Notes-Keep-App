function sortByDateFilter(notes, sortByDate) {
  if (sortByDate === "new-to-old") {
    return [
      ...notes.sort((a, b) => {
        var a_date = Number(Date.parse(a.createdAt));
        var b_date = Number(Date.parse(b.createdAt));
        return a_date > b_date ? -1 : 1;
      }),
    ];
  } else if (sortByDate === "old-to-new") {
    return [
      ...notes.sort((a, b) => {
        var a_date = Number(Date.parse(a.createdAt));
        var b_date = Number(Date.parse(b.createdAt));
        return a_date > b_date ? 1 : -1;
      }),
    ];
  }

  return notes;
}

export { sortByDateFilter };
