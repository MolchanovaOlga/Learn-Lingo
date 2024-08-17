import clsx from "clsx";
import { NavLink } from "react-router-dom";

import sprite from "../../assets/sprite.svg";
import css from "./Navigation.module.css";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/teachers" className={buildLinkClass}>
          Teachers
        </NavLink>
        <NavLink to="/favorites" className={buildLinkClass}>
          Favorites
        </NavLink>
      </nav>
      <button type="button" className={css.btnMenu}>
        <svg className={css.iconMenu} width="20" height="20">
          <use href={`${sprite}#icon-menu`}></use>
        </svg>
      </button>
    </>
  );
};

export default Navigation;
