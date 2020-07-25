module.exports = {
  // https://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    node: true,
    jest: true,
  },

  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "prettier"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
  rules: {
    "no-console": "off",
    "prettier/prettier": ["error", { semi: false }],

    // https://stackoverflow.com/questions/59265981/typescript-eslint-missing-file-extension-ts-import-extensions
    "import/extensions": ["error", "ignorePackages", { ts: "never" }],

    // switch 内での列挙漏れチェック
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "default-case": "off",
  },
}
