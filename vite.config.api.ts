/// <reference types="vite" />
/// <reference types="vitest" />
import { defineConfig } from "vite";

import { config } from "dotenv";

config();

export default defineConfig({
  root: "./api",
  test: {
    environment: "node",
    setupFiles: "./vitest.setup.ts",
  }
});
