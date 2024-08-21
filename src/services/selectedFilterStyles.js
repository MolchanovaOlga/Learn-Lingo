export const customStyles = {
  container: (provided) => ({
    ...provided,
    width: "221px",
  }),

  control: (provided) => ({
    ...provided,
    borderRadius: "14px",
    border: "none",
    padding: "14px 18px",
    boxShadow: "none",
  }),

  option: (provided, state) => {
    const index = state.options.findIndex((item) => item.value === state.value);
    const isLast = index === state.options.length - 1;

    return {
      ...provided,
      backgroundColor: "#fff",
      color: state.isSelected ? "#121417" : "rgba(18, 20, 23, 0.2)",
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "1.1",
      marginBottom: isLast ? "0px" : "8px",
      padding: "0",
      "&:hover": {
        color: "#121417",
        transition: "color 200ms linear",
      },
    };
  },

  menu: (provided) => ({
    ...provided,
    width: "221px",
    borderRadius: "12px",
    padding: "14px 18px",
    boxShadow: "0 8px 16px rgba(18, 20, 23, 0.2)",
  }),

  placeholder: (provided) => ({
    ...provided,
    color: "#121417",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "1.1",
    padding: "0",
    margin: "0",
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),

  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#121417",
    padding: "0 0 0 10px",
    "&:hover": {
      color: "#8a8a89",
      transition: "color 200ms linear",
    },
  }),

  valueContainer: (provided) => ({
    ...provided,
    padding: "0",
    margin: "0",
  }),

  input: (provided) => ({
    ...provided,
    padding: "0",
    margin: "0",
  }),
};
