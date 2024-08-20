import css from "./ReviewItem.module.css";
import sprite from "../../assets/sprite.svg";

const ReviewItem = () => {
  return (
    <div className={css.container}>
      <div className={css.topContainer}>
        <div className={css.imgContainer}>
          <div className={css.img}></div>
        </div>
        <div className={css.contentContainer}>
          <h4 className={css.title}>Frank</h4>
          <div className={css.ratingContainer}>
            <svg className={css.iconStar} width="16" height="16">
              <use href={`${sprite}#icon-star`}></use>
            </svg>
            <p className={css.ratingText}>5.0</p>
          </div>
        </div>
      </div>
      <p className={css.text}>
        Jane's lessons were very helpful. I made good progress.
      </p>
    </div>
  );
};

export default ReviewItem;
