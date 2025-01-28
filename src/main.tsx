import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AlbumSelectPage from "./pages/AlbumSelectPage.tsx";
import { NotFoundPage } from "./pages/NotFoundPage.tsx";
import AlbumViewPage from "./pages/AlbumViewPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/"
            element={<AlbumSelectPage />}
            errorElement={<NotFoundPage />}
          />
          <Route path="/album/:albumId" element={<AlbumViewPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
