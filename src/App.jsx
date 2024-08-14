import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Container from "./components/Container/Container";
import "./App.css";

const HomePage = lazy(() => import("./pages/Home"));
const TeachersPage = lazy(() => import("./pages/Teachers"));
const FavoritesPage = lazy(() => import("./pages/Favorites"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Container>
      <Navigation />
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
  );
}

export default App;
