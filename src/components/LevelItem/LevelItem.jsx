import css from "./LevelItem.module.css";

const LevelItem = () => {
  return (
    <div className={css.levelItemContainer}>
      <p className={css.text}>#A1 Beginner</p>
    </div>
  );
};

export default LevelItem;
