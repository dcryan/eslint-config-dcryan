module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:prettier/react/recommended",
    "plugin:react-hooks/recommended",
  ],
  "plugins": ["html"],
  "env": {
    "es6": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2020
  },
};
