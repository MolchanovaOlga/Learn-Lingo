import { useState } from "react";
import Select from "react-select";

import {
  customStyles,
  languages,
  levels,
  price,
} from "../../services/selectedFilterStyles";
import css from "./FilteredMenu.module.css";

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
            menu: (provided) => ({
              ...provided,
              width: "198px",
              padding: "14px 18px",
              borderRadius: "12px",
              boxShadow: "0 8px 16px rgba(18, 20, 23, 0.2)",
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
            menu: (provided) => ({
              ...provided,
              width: "124px",
              padding: "14px 18px",
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 8px 16px rgba(18, 20, 23, 0.2)",
            }),
          }}
          placeholder={price[0].label}
        />
      </li>
    </ul>
  );
};

export default FilteredMenu;
