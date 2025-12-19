import { defineConfig } from "tsdown";
import { injectCssPlugin } from "@bosh-code/tsdown-plugin-inject-css";
import lightningCSS from "unplugin-lightningcss/rolldown";

export default defineConfig({
  external: ["preact"],
  plugins: [
    injectCssPlugin(),
    lightningCSS({
      options: {
        minify: true,
      },
    }),
  ],
  attw: {
    enabled: true,
    level: "error",
    profile: "node16",
  },
  entry: ["./src/index.tsx"],
  target: ["node16", "esnext"],
  format: ["cjs", "esm"],
  copy: ["src/index.css"],
});
