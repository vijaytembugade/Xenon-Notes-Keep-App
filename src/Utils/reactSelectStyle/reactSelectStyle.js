const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    color: "gray",
    backgroundColor: "var(--light-color)",
    padding: "10px",
  }),
  control: (provided, state) => ({
    // none of react-select's styles are passed to <Control />
    ...provided,
    color: "gray",
    backgroundColor: "var(--light-color)",
  }),
  input: (provided) => ({
    ...provided,
    color: "var(--text-color)",
  }),
};

export { customStyles };
