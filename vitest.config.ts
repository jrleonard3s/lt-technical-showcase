/// <reference types="vitest/config" />
import { defineConfig } from "vite";

// https://vitest.dev/config/
export default defineConfig({
  test: {
    environment: "jsdom",
  },
});
