import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import scrollController from "../../services/noScroll";
import { closeByEsc } from "../../services/functions";
import sprite from "../../assets/sprite.svg";
import css from "./Navigation.module.css";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen(true);
    scrollController.disabledScroll();
  }

  function closeMenu() {
    setIsOpen(false);
    scrollController.enabledScroll();
  }

  useEffect(() => {
    closeByEsc(closeMenu);
  }, []);

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
      <div className={css.containerMenu}>
        <button onClick={openMenu} type="button" className={css.btnMenu}>
          <svg className={css.iconMenu} width="20" height="20">
            <use href={`${sprite}#icon-menu`}></use>
          </svg>
        </button>

        {isOpen && <div className={css.backdrop} onClick={closeMenu}></div>}

        {isOpen && (
          <nav className={css.navMenu}>
            <div className={css.menuItemContainer}>
              <NavLink to="/" className={buildLinkClass} onClick={closeMenu}>
                Home
              </NavLink>
            </div>
            <div className={css.menuItemContainer}>
              <NavLink
                to="/teachers"
                className={buildLinkClass}
                onClick={closeMenu}
              >
                Teachers
              </NavLink>
            </div>
            <div className={css.menuItemContainer}>
              <NavLink
                to="/favorites"
                className={buildLinkClass}
                onClick={closeMenu}
              >
                Favorites
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </>
  );
};

export default Navigation;
