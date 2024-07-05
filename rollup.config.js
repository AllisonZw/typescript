import ts from "rollup-plugin-typescript2";
import serve from "rollup-plugin-serve";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// __dirname __filename
// console.log(import.meta.url);
const __filename = fileURLToPath(import.meta.url) // 当前文件的绝对路径
const __dirname = dirname(__filename) // 当前文件所在目录的 绝对路径

export default {
  input: resolve(__dirname, "src/index.ts"),
  output: {
    format: "iife",
    file: resolve(__dirname, "dist/bundle.js"),
    sourcemap: true, // 源码调试功能
  },
  plugins: [
    nodeResolve({
      extensions: [".ts", ".js"],
    }),
    ts({
      tsconfig: resolve(__dirname, "tsconfig.json"),
    }),
    serve({
      port: 3000,
      openPage: '/public/index.html',
      open: true
    })
  ]
}