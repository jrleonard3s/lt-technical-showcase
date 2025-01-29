import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/ltapi": {
        rewrite: (path) => path.replace(/^\/ltapi/, ""),
        target: "https://showcase.leantechniques.com",
        changeOrigin: true,
        secure: false,
      },
      "/album/ltapi": {
        rewrite: (path) => path.replace(/^\/album\/ltapi/, ""),
        target: "https://showcase.leantechniques.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
