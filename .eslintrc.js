module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/no-unknown-property": "off",
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "react/react-in-jsx-scope": "off",
    "no-useless-escape": "off",
  },
};
