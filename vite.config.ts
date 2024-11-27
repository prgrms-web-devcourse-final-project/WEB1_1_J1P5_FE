import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      plugins: [["@swc/plugin-emotion", {}]],
    }),
    tsconfigPaths(),
  ],
  define: {
    "process.env": process.env
  }
});
