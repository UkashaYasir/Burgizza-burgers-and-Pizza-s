import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { nitro } from "nitro/vite";

export default defineConfig({
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    basicSsl(),
    tanstackStart({ appDirectory: "src" }),
    nitro(),
    react(),
    tailwindcss(),
    tsConfigPaths()
  ],
});
