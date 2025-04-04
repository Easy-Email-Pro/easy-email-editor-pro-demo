import { minify as minifyHtml } from "html-minifier-terser";

// Please note that you need to import the esm version and modify the alias.
// Please check the file: vite.config.ts

// "html-minifier-terser": path.resolve(
//   "./node_modules/html-minifier-terser/dist/htmlminifier.esm.bundle.js"
// ),
export function minify(html: string) {
  return minifyHtml(html, {
    collapseWhitespace: true,
    minifyCSS: true,
    caseSensitive: true,
    removeEmptyAttributes: true,
    collapseInlineTagWhitespace: true,
    ignoreCustomFragments: [/\{\{[\s\S]*?\}\}/, /\{%[\s\S]*?%\}/],
  });
}
