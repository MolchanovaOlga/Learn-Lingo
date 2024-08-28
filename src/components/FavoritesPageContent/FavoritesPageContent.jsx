import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Loader from "../Loader/Loader";
import {
  selectTeachersLoading,
  selectFavoriteTeachers,
} from "../../redux/teachers/selectors";
import FilteredMenu from "../FilteredMenu/FilteredMenu";
import TeachersList from "../TeachersList/TeachersList";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import css from "./FavoritesPageContent.module.css";

const FavoritesPageContent = () => {
  const [perPage, setPerPage] = useState(4);
  const [favoriteTeachers, setFavoriteTeachers] = useState([]);

  const favorites = useSelector(selectFavoriteTeachers);
  const loader = useSelector(selectTeachersLoading);

  console.log(favorites);

  useEffect(() => {
    setFavoriteTeachers(favorites.slice(0, perPage));
  }, [favorites, perPage]);

  const handleLoadMore = () => {
    setPerPage((prev) => prev + 4);
  };

  return (
    <>
      <div className={css.container}>
        <div className={css.listContainer}>
          <FilteredMenu />
          <TeachersList list={favoriteTeachers} active={true} />
          {loader && <Loader />}
        </div>
        {!loader && favoriteTeachers.length < favorites.length && (
          <LoadMoreBtn handleClick={handleLoadMore} />
        )}
      </div>
    </>
  );
};

export default FavoritesPageContent;
