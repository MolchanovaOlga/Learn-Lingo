import css from "./AuthNav.module.css";
import sprite from "../../assets/sprite.svg";

const AuthNav = () => {
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
      <button type="button" className={css.btnAuthNav}>
        <svg className={css.iconThreeDots} width="20" height="20">
          <use href={`${sprite}#icon-dots-three-vertical`}></use>
        </svg>
      </button>
    </>
  );
};

export default AuthNav;
