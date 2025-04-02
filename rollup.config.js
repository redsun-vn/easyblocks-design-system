// @ts-check
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";
import path from "node:path";
import visualizer from "rollup-plugin-visualizer";
import preserveDirectives from "rollup-plugin-preserve-directives";
import packageJson from "./package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const getPlugins = (stat, isFullBundle = false) => {
  const preserveDirectivesPlugin = preserveDirectives();

  /**
   * @type {Array<import('rollup').Plugin>}
   */

  const plugins = [
    babel({
      configFile: "./.babelrc.json",
      extensions,
      exclude: [/(node_modules|(editor|compiler)\/dist)/],
      babelHelpers: "runtime",
    }),
    nodeResolve({
      extensions,
      browser: isFullBundle, // browser: true for bundled editor, it's important not to add "node" stuff to the editor that is run in the browser
    }),

    commonjs(),
    json(),

    visualizer({
      filename: stat,
      gzipSize: true,
    }),

    {
      ...preserveDirectivesPlugin,
      renderChunk: preserveDirectivesPlugin.renderChunk.handler,
    },
  ];

  // if (process.env.NODE_ENV === "production") {
  //     plugins.push(terser());
  // }

  return plugins;
};

const dependencyKeys = Object.keys(packageJson.dependencies || {});
const peerDependencyKeys = Object.keys(packageJson.peerDependencies || {});

const allDependenciesKeys = [
  ...dependencyKeys,
  ...peerDependencyKeys.map((key) => new RegExp(`^${key}`)),
  /@babel\/runtime/,
  /^lodash\//,
];

function createRollupConfigs({
  inputFile,
  baseOutputDir,
  baseStatOutputDir,
  isFullBundle = false,
}) {
  const external = isFullBundle ? [] : allDependenciesKeys;

  const onwarn = (warning, warn) => {
    if (
      warning.message.includes(
        "Module level directives cause errors when bundled, 'use client' was ignored."
      )
    ) {
      return;
    }

    // parser file is automatically generated and we don't have control over it
    if (
      warning.message.includes(
        `Entry module "../reduce-css-calc/src/parser.js" is implicitly using "default" export mode`
      )
    ) {
      return;
    }

    warn(warning);
  };

  /** @type import('rollup').RollupOptions */
  const esBundleConfig = {
    input: inputFile,
    output: {
      format: "es",
      dir: `${baseOutputDir}/es`,
    },
    plugins: [
      ...getPlugins(
        path.join(baseStatOutputDir, "es/index.html"),
        isFullBundle
      ),
      alias({
        entries: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
      }),
    ],
    external,
    onwarn,
  };

  /** @type import('rollup').RollupOptions */
  const cjsBundleConfig = {
    input: inputFile,
    output: {
      format: "cjs",
      dir: `${baseOutputDir}/cjs`,
      entryFileNames: "[name].cjs",
    },
    plugins: [
      ...getPlugins(
        path.join(baseStatOutputDir, "cjs/index.html"),
        isFullBundle
      ),
      alias({
        entries: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
      }),
    ],
    external,
    onwarn,
  };

  return [esBundleConfig, cjsBundleConfig];
}

export default createRollupConfigs({
  inputFile: ["src/index.ts"],
  baseOutputDir: "dist",
  baseStatOutputDir: "stats",
});
