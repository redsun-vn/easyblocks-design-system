import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

/**
 * Lightweight manual-verification playground for design-system components.
 * NOT part of the published package — `tsconfig.json` `include` is `src/` only,
 * so nothing here is type-emitted or bundled into `dist`.
 *
 * Run with: `npm run example`
 */
export default defineConfig({
  root: path.resolve(__dirname, "examples"),
  plugins: [react()],
  server: { port: 5174, open: false },
});
