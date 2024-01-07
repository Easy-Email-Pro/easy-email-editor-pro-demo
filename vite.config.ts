/* eslint-disable turbo/no-undeclared-env-vars */
import { defineConfig } from "vite";
import path from "path";
import svgr from "vite-plugin-svgr";
import monacoEditorPlugin from "vite-plugin-monaco-editor";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr({ exportAsDefault: true }),
    monacoEditorPlugin({}),
    // sentryVitePlugin({
    //   authToken: process.env.SENTRY_AUTH_TOKEN,
    //   org: "mao-wa",
    //   project: "b-react",
    // }),
  ].filter(Boolean) as any,
  define: {
    "process.env.UNSPLASH_CLIENT_ID": JSON.stringify(
      process.env.UNSPLASH_CLIENT_ID
    ),
    "process.env.CLIENT_ID": JSON.stringify(process.env.CLIENT_ID),
  },
  build: {
    emptyOutDir: true,
    minify: false,
    manifest: false,
    sourcemap: true,
  },

  resolve: {
    alias: {
      "mjml-browser": path.resolve("./node_modules/mjml-browser"),

      "@": path.resolve("src"),
    },
  },
  optimizeDeps: {
    needsInterop: ["velocityjs"],
  },
});
