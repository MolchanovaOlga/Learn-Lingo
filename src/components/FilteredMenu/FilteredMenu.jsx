import { useState } from "react";
import Select from "react-select";

import { customStyles } from "../../services/selectedFilterStyles";
import css from "./FilteredMenu.module.css";

const languages = [
  { value: "French", label: "French" },
  { value: "English", label: "English" },
  { value: "German", label: "German" },
  { value: "Ukrainian", label: "Ukrainian" },
  { value: "Polish", label: "Polish" },
];

const levels = [
  { value: "A1 Beginner", label: "A1 Beginner" },
  { value: "A2 Elementary", label: "A2 Elementary" },
  { value: "B1 Intermediate", label: "B1 Intermediate" },
  { value: "B2 Upper-Intermediate", label: "B2 Upper-Intermediate" },
];

const price = [
  { value: "10", label: "10" },
  { value: "20", label: "20" },
  { value: "30", label: "30" },
  { value: "40", label: "40" },
];

const FilteredMenu = () => {
  const [selectedLangOption, setSelectedLangOption] = useState(null);
  const [selectedLevelOption, setSelectedLevelOption] = useState(null);
  const [selectedPriceOption, setSelectedPriceOption] = useState(null);

  return (
    <ul className={css.filteredList}>
      <li className={css.filteredItem}>
        <p className={css.text}>Languages</p>
        <Select
          defaultValue={selectedLangOption}
          onChange={setSelectedLangOption}
          options={languages}
          className={css.select}
          styles={customStyles}
          placeholder={languages[0].label}
        />
      </li>
      <li className={css.filteredItem}>
        <p className={css.text}>Level of knowledge</p>
        <Select
          defaultValue={selectedLevelOption}
          onChange={setSelectedLevelOption}
          options={levels}
          className={css.select}
          styles={{
            ...customStyles,
            container: (provided) => ({
              ...provided,
              width: "198px",
            }),
          }}
          placeholder={levels[0].label}
        />
      </li>

      <li className={css.filteredItem}>
        <p className={css.text}>Price</p>
        <Select
          defaultValue={selectedPriceOption}
          onChange={setSelectedPriceOption}
          options={price}
          className={css.select}
          styles={{
            ...customStyles,
            container: (provided) => ({
              ...provided,
              width: "124px",
            }),
          }}
          placeholder={price[0].label}
        />
      </li>
    </ul>
  );
};

export default FilteredMenu;
