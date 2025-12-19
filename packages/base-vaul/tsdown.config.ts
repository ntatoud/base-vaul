import { defineConfig } from "tsdown";
import { injectCssPlugin } from "@bosh-code/tsdown-plugin-inject-css";
import lightningCSS from "unplugin-lightningcss/rolldown";

export default defineConfig({
  external: ["react"],
  plugins: [
    lightningCSS({
      options: {
        minify: true,
      },
    }),
    injectCssPlugin(),
  ],
  attw: {
    enabled: true,
    level: "error",
    profile: "esm-only",
  },
  sourcemap: false,
  entry: ["./src/index.tsx"],
  target: "esnext",
  format: "esm",
  copy: ["src/index.css"],
});
