import css from "./LevelItem.module.css";

const LevelItem = ({ level }) => {
  return (
    <div className={css.levelItemContainer}>
      <p className={css.text}>#{level}</p>
    </div>
  );
};

export default LevelItem;
