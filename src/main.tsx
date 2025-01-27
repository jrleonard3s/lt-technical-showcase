import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/albums" element={<AlbumsPage />} />
        <Route path="/album/:albumId" element={<AlbumViewPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/photo/:photoId" element={<SingleImageViewPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
