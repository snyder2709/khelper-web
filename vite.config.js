import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { v4 as uuid } from "uuid";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name]` + uuid() + `.js`,
        chunkFileNames: `[name]` + uuid() + `.js`,
        assetFileNames: `[name]` + uuid() + `.[ext]`,
      },
    },
  },
  server: {
    host: true,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
