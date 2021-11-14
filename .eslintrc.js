module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "next/core-web-vitals",
    "plugin:react/recommended",
    "standard",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "@typescript-eslint"],
  rules: {
    "@next/next/no-img-element": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "no-use-before-define": "off",
    "prettier/prettier": "warn",
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
