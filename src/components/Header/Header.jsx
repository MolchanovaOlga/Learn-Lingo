import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import AuthNav from "../AuthNav/AuthNav";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <Logo />
      <Navigation />
      <AuthNav />
    </header>
  );
};

export default Header;
