import clsx from "clsx";
import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
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
  );
};

export default Navigation;
