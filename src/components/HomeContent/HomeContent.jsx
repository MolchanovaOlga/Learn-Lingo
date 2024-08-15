import css from "./HomeContent.module.css";

const HomeContent = () => {
  return (
    <div className={css.homeContainer}>
      <div></div>
      <div className={css.statisticContainer}>
        <ul className={css.statisticList}>
          <li className={css.statisticItem}>
            <h3 className={css.statisticTitle}>32,000 +</h3>
            <p className={css.statisticText}>Experienced tutors</p>
          </li>
          <li className={css.statisticItem}>
            <h3 className={css.statisticTitle}>300,000 +</h3>
            <p className={css.statisticText}>5-star tutor reviews</p>
          </li>
          <li className={css.statisticItem}>
            <h3 className={css.statisticTitle}>120 +</h3>
            <p className={css.statisticText}>Subjects taught</p>
          </li>
          <li className={css.statisticItem}>
            <h3 className={css.statisticTitle}>200 +</h3>
            <p className={css.statisticText}>Tutor nationalities</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeContent;
