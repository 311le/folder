import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Keep development cache outside node_modules to avoid locked files on Windows.
  cacheDir: ".vite-cache/dev",
  plugins: [react()],
});
