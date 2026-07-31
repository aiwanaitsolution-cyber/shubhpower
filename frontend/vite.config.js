import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { viteSingleFile } from "vite-plugin-singlefile";

// VITE_SINGLEFILE=1 => inline everything (incl. lazy chunks) into one self-contained index.html.
const singlefile = process.env.VITE_SINGLEFILE === "1";

export default defineConfig({
  plugins: [react(), ...(singlefile ? [viteSingleFile()] : [])],
  resolve: {
    alias: { "@": path.resolve(process.cwd(), "src") },
  },
  build: {
    outDir: "build",
    emptyOutDir: true,
    ...(singlefile ? { rollupOptions: { output: { inlineDynamicImports: true } } } : {}),
  },
});
