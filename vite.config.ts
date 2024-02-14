import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode == "client") {
    return {
      build: {
        plugins: [react()],
        emptyOutDir: false,
      },
    };
  } else {
    return {
      build: {
        rollupOptions: {
          input: ["src/server.ts"],
          output: {
            entryFileNames: "_worker.js",
          },
        },
      },
    };
  }
});
