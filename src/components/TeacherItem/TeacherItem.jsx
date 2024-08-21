import { useState } from "react";

import ReviewItem from "../ReviewItem/ReviewItem";
import LevelItem from "../LevelItem/LevelItem";
import css from "./TeacherItem.module.css";
import sprite from "../../assets/sprite.svg";

const TeacherItem = () => {
  const [readMore, setReadMore] = useState(false);

  function handleClickReadMore() {
    setReadMore(true);
  }

  return (
    <div className={css.container}>
      <div className={css.imgContainer}>
        <div className={css.img}></div>
        <div className={css.greenCircle}></div>
      </div>
      <div className={css.contentContainer}>
        <div className={css.topString}>
          <div className={css.languagesContainer}>
            <h3 className={css.detailsTitle}>Languages</h3>
            <div className={css.statisticContainer}>
              <div className={css.lessonsOnlineContainer}>
                <svg className={css.iconBook} width="16" height="16">
                  <use href={`${sprite}#icon-book-open`}></use>
                </svg>
                <p className={css.statisticText}>Lessons online</p>
              </div>
              <div className={css.lessonsDoneContainer}>
                <p className={css.statisticText}>Lessons done: 1098</p>
              </div>
              <div className={css.ratingContainer}>
                <svg className={css.iconStar} width="16" height="16">
                  <use href={`${sprite}#icon-star`}></use>
                </svg>
                <p className={css.statisticText}>Rating: 4.8</p>
              </div>
              <div className={css.priceContainer}>
                <p className={css.statisticText}>
                  Price / 1 hour: <span className={css.selectPrice}>30$</span>
                </p>
              </div>
            </div>
          </div>
          <button className={css.heartBtn}>
            <svg className={css.iconHeart} width="26" height="26">
              <use href={`${sprite}#icon-heart`}></use>
            </svg>
          </button>
        </div>

        <h2 className={css.title}>Jane Smith</h2>
        <div className={css.detailsContainer}>
          <div className={css.detailsItemContainer}>
            <h3 className={css.detailsTitle}>Speaks:</h3>
            <p className={css.underlinedText}> German, French</p>
          </div>
          <div className={css.detailsItemContainer}>
            <h3 className={css.detailsTitle}>Lesson Info:</h3>
            <p className={css.text}>
              Lessons are structured to cover grammar, vocabulary, and practical
              usage of the language.
            </p>
          </div>
          <div className={css.detailsItemContainer}>
            <h3 className={css.detailsTitle}>Conditions:</h3>
            <p className={css.text}>
              Welcomes both adult learners and teenagers (13 years and above).
              Provides personalized study plans
            </p>
          </div>
        </div>

        {!readMore && (
          <button
            type="button"
            className={css.readMoreBtn}
            onClick={handleClickReadMore}
          >
            Read more
          </button>
        )}

        {readMore && (
          <div className={css.readMoreContainer}>
            <p className={css.experienceText}>
              Jane is an experienced and dedicated language teacher specializing
              in German and French. She holds a Bachelor's degree in German
              Studies and a Master's degree in French Literature. Her passion
              for languages and teaching has driven her to become a highly
              proficient and knowledgeable instructor. With over 10 years of
              teaching experience, Jane has helped numerous students of various
              backgrounds and proficiency levels achieve their language learning
              goals. She is skilled at adapting her teaching methods to suit the
              needs and learning styles of her students, ensuring that they feel
              supported and motivated throughout their language journey.
            </p>
            <ul className={css.reviewsList}>
              <li>
                <ReviewItem />
              </li>
              <li>
                <ReviewItem />
              </li>
            </ul>
          </div>
        )}

        <ul className={css.levelsList}>
          <li>
            <LevelItem />
          </li>
          <li>
            <LevelItem />
          </li>
        </ul>

        {readMore && (
          <button type="button" className={css.bookTrialBtn}>
            Book trial lesson
          </button>
        )}
      </div>
    </div>
  );
};

export default TeacherItem;
