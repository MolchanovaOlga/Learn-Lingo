import TeachersList from "../TeachersList/TeachersList";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import css from "./TheachersContent.module.css";

const TheachersContent = () => {
  return (
    <div className={css.container}>
      <TeachersList />
      <LoadMoreBtn />
    </div>
  );
};

export default TheachersContent;
