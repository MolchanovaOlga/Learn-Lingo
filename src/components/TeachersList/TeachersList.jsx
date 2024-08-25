import TeacherItem from "../TeacherItem/TeacherItem";
import css from "./TeachersList.module.css";

const TeachersList = ({ list, active }) => {
  return (
    <div className={css.listContainer}>
      {list && list.length > 0 ? (
        <ul className={css.list}>
          {list.map((item) => {
            return (
              <li className={css.item} key={item.id}>
                <TeacherItem teachersDetails={item} active={active} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={css.text}>There are no adverts yet.</p>
      )}
    </div>
  );
};

export default TeachersList;
