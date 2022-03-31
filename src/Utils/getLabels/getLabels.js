function getLabels(notes) {
  return notes.reduce((acc, curr) => {
    if (curr.tags.length > 0) {
      return [...acc, ...curr.tags.filter((label) => !acc.includes(label))];
    } else {
      return [...acc];
    }
  }, []);
}

export { getLabels };
