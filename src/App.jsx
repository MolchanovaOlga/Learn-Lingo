import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { refreshUser } from "./redux/auth/operations";
import Layout from "./components/Layout/Layout";
import css from "./App.module.css";
import Container from "./components/Container/Container";

const HomePage = lazy(() => import("./pages/Home"));
const TeachersPage = lazy(() => import("./pages/Teachers"));
const FavoritesPage = lazy(() => import("./pages/Favorites"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  const getBackgroundClass = () => {
    if (
      location.pathname === "/teachers" ||
      location.pathname === "/favorites"
    ) {
      return css.backgroundTheachers;
    } else {
      return css.background;
    }
  };

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className={getBackgroundClass()}>
      <Container>
        <Suspense>
          <Layout>
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/teachers" element={<TeachersPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="*" element={<NotFoundPage replace />} />
              </Routes>
            </main>
          </Layout>
        </Suspense>
      </Container>
    </div>
  );
}

export default App;
