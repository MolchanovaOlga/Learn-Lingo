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
  singleValue: (provided) => ({
    ...provided,
    padding: "0",
    margin: "0",
  }),
};

// ====================================================================================

export const themes = [
  { value: "Yellow", label: "Yellow", color: "#f4c550" },
  { value: "Green", label: "Green", color: "#9fbaae" },
  { value: "Blue", label: "Blue", color: "#9fb7ce" },
  { value: "Red", label: "Red", color: "#e0a39a" },
  { value: "Brown", label: "Brown", color: "#f0aa8d" },
];

const dotInMenu = (color = "transparent") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    height: 16,
    width: 16,
    marginRight: 4,
  },
});

const dotInInput = (color = "transparent") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    height: 18,
    width: 18,
    position: "absolute",
  },
});

export const customThemeStyles = {
  container: (provided) => ({
    ...provided,
    width: "70px",
    borderRadius: "12px",
    marginLeft: "8px",
    position: "relative",
  }),

  control: (provided) => ({
    ...provided,
    borderRadius: "14px",
    border: "none",
    padding: "0 12px",
    boxShadow: "none",
    backgroundColor: "#fff",
  }),

  option: (provided, { data, options, value, isSelected }) => {
    const index = options.findIndex((item) => item.value === value);
    const isLast = index === options.length - 1;

    return {
      ...provided,
      ...dotInMenu(data.color),
      backgroundColor: "#fff",
      color: isSelected ? "rgba(18, 20, 23, 0.5)" : "rgba(18, 20, 23, 0.2)",
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "1.1",
      marginBottom: isLast ? "0px" : "16px",
      padding: "0",
      alignItems: "center",
      display: "flex",
      "&:hover": {
        color: "rgba(18, 20, 23, 0.5)",
        transition: "color 200ms linear",
      },
    };
  },

  menu: (provided) => ({
    ...provided,
    width: "120px",
    borderRadius: "12px",
    padding: "14px 18px",
    boxShadow: "0 8px 16px rgba(18, 20, 23, 0.2)",
  }),

  placeholder: (provided) => ({
    ...provided,
    ...dotInInput("#ccc"),
    color: "transparent",
    fontSize: "10px",
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
    padding: "0",
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
    ...dotInInput(),
    padding: "0",
    margin: "0",
  }),

  singleValue: (provided, { data }) => ({
    ...provided,
    ...dotInInput(data.color),
    padding: "0",
    margin: "0",
    color: "transparent",
  }),
};
