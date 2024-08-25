import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import FilteredMenu from "../FilteredMenu/FilteredMenu";
import TeachersList from "../TeachersList/TeachersList";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { fetchTeachers } from "../../redux/teachers/operations";
import { getAmountTeachers } from "../../services/apiTeachers";
import {
  selectTeachersItems,
  selectTeachersLastKey,
} from "../../redux/teachers/selectors";
import css from "./TheachersPageContent.module.css";

const TheachersPageContent = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const teachers = useSelector(selectTeachersItems).slice(4);
  const lastKey = useSelector(selectTeachersLastKey);

  const perPage = 4;

  useEffect(() => {
    const settingHasMore = async () => {
      const length = await getAmountTeachers();
      setHasMore(length > perPage && page < length / perPage ? true : false);
    };

    settingHasMore();
  }, [page]);

  useEffect(() => {
    if (teachers.length === 0) {
      dispatch(fetchTeachers(null));
    }
  }, [dispatch, teachers.length]);

  console.log(teachers);

  const handleLoadMore = () => {
    if (lastKey) {
      setPage(page + 1);
      dispatch(fetchTeachers(Number(lastKey) + 1));
      console.log(hasMore);
    }
  };

  return (
    <>
      <div className={css.container}>
        <div className={css.listContainer}>
          <FilteredMenu />
          <TeachersList list={teachers} active={false} />
        </div>
        {hasMore && teachers.length > 0 && (
          <LoadMoreBtn handleClick={handleLoadMore} />
        )}
      </div>
    </>
  );
};

export default TheachersPageContent;
