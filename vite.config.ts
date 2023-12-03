import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import express from "./express-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), express("src/server")],
  build: {
    outDir: "dist/client",
  },
  server: {
    proxy: {
      "/api/": {
        target: "http://localhost:5051",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  base: "./",
});
