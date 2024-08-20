import TeacherItem from "../TeacherItem/TeacherItem";
import css from "./TeachersList.module.css";

const TeachersList = () => {
  return (
    <ul className={css.list}>
      <li>
        <TeacherItem />
      </li>
      <li>
        <TeacherItem />
      </li>
    </ul>
  );
};

export default TeachersList;
