import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import css from "./App.module.css";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";

const HomePage = lazy(() => import("./pages/Home"));
const TeachersPage = lazy(() => import("./pages/Teachers"));
const FavoritesPage = lazy(() => import("./pages/Favorites"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

function App() {
  const location = useLocation();

  const getBackgroundClass = () => {
    if (location.pathname === "/") {
      return css.background;
    } else {
      return css.backgroundTheachers;
    }
  };

  return (
    <div className={getBackgroundClass()}>
      <Container>
        <Header />
        <main>
          <Suspense>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/teachers" element={<TeachersPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="*" element={<NotFoundPage replace />} />
            </Routes>
          </Suspense>
        </main>
      </Container>
    </div>
  );
}

export default App;
