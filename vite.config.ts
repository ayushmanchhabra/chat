/// <reference types="vite" />
/// <reference types="vitest" />
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  root: "./client",
  plugins: [react(), tsconfigPaths()],
  server: {
    https: false,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "vitest.setup.ts",
  },
});
