import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: "src/server.ts",
      output: {
        entryFileNames: "_worker.js",
      },
    },
  },
  plugins: [react()],
});
