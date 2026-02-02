module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended",
    "react-app",
    "react-app/jest",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-console": "off",
    "react/react-in-jsx-scope": "off", // Not needed in React 17+
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        assert: "either", // either nesting or htmlFor
        depth: 3, // how deep to look inside custom components
      },
    ],
    "import/prefer-default-export": "off",
    "react/require-default-props": "off"
  },
};
