import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [basicSsl(), tanstackStart({ appDirectory: "src" }), react(), tailwindcss(), tsConfigPaths()],
});
