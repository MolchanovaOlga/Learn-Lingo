import FilteredMenu from "../FilteredMenu/FilteredMenu";
import TeachersList from "../TeachersList/TeachersList";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import css from "./TheachersPageContent.module.css";

const TheachersPageContent = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.listContainer}>
          <FilteredMenu />
          <TeachersList />
        </div>
        <LoadMoreBtn />
      </div>
    </>
  );
};

export default TheachersPageContent;
