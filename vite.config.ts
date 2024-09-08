/// <reference types="vite" />
/// <reference types="vitest" />
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";

import { config } from "dotenv";

config();

export default defineConfig({
  root: "./web",
  plugins: [react(), tsconfigPaths()],
  server: {
    host: process.env.VITE_HOSTNAME,
    port: Number(process.env.VITE_WEB_PORT),
  },
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['json', 'json-summary'],
      reportOnFailure: true,
    },
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.ts",
    
  },
});
