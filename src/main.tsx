import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.tsx";
import AlbumSelectPage from "./pages/AlbumSelectPage.tsx";
import Gallery from "./pages/Gallery.tsx";
import SingleImageViewPage from "./pages/SingleImageViewPage.tsx";
import { NotFoundPage } from "./pages/NotFoundPage.tsx";
import AlbumViewPage from "./pages/AlbumViewPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<AlbumSelectPage />}
          errorElement={<NotFoundPage />}
        />
        <Route path="/albums/:albumId" element={<AlbumViewPage />} />
        <Route path="/photo/:photoId" element={<SingleImageViewPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
