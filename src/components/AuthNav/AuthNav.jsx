import { useState, useEffect } from "react";

import scrollController from "../../services/noScroll";
import { closeByEsc } from "../../services/functions";
import css from "./AuthNav.module.css";
import sprite from "../../assets/sprite.svg";

const AuthNav = () => {
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
      <div className={css.authNavContainer}>
        <button type="button" className={css.btnLogIn}>
          <svg className={css.iconLogIn} width="20" height="20">
            <use href={`${sprite}#icon-log-in`}></use>
          </svg>
          Log In
        </button>
        <button type="button" className={css.btnRegister}>
          Registration
        </button>
      </div>
      <div className={css.containerMenu}>
        <button type="button" className={css.btnAuthNav} onClick={openMenu}>
          <svg className={css.iconThreeDots} width="20" height="20">
            <use href={`${sprite}#icon-dots-three-vertical`}></use>
          </svg>
        </button>

        {isOpen && <div className={css.backdrop} onClick={closeMenu}></div>}

        {isOpen && (
          <div className={css.btnsContainer}>
            <button type="button" className={css.btnLogIn}>
              <svg className={css.iconLogIn} width="20" height="20">
                <use href={`${sprite}#icon-log-in`}></use>
              </svg>
              Log In
            </button>
            <button type="button" className={css.btnRegister}>
              Registration
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AuthNav;
