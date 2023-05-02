import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      components: "/src/components",
      config: "/src/config",
      helpers: "/src/helpers",
      hooks: "/src/hooks",
      Views: "/src/Views",
    },
  },
});
