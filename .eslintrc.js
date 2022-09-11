module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    "googleappsscript/googleappsscript": true,
  },
  extends: ["standard-with-typescript", "googleappsscript"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {},
  plugins: ["googleappsscript"],
};
