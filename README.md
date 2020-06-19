# EZ ESLint & Prettier Setup

> NOTE: I'm happy to take suggestions, but in the end these are my preferences. No hard feelings :)

## Background
I was feeling SOO frustrated installing all the packages for my ESLint & Prettier setup, and they NEVER worked on the first try.
I took inspiration from [Wes Bos' No-Sweat™ Eslint and Prettier Setup](https://github.com/wesbos/eslint-config-wesbos), and wanted
to publish my own preferences.

## Installation

```
npx install-peerdeps --dev eslint-config-dcryan
```

Add an .eslintrc.js file
```
module.exports = {
  "extends": "dcryan"
}
```

## Getting Setup with VSCode

```
"editor.formatOnSave": true,
"[javascript]": {
  "editor.formatOnSave": false
},
"[javascriptreact]": {
  "editor.formatOnSave": false
},
"editor.codeActionsOnSave": {
  "source.fixAll": true
},
"prettier.disableLanguages": ["javascript", "javascriptreact"],
```

## FAQs

How do I make my own ESLint Config?
> Check it out here. 👉 [ESLint Sharable Configs](https://eslint.org/docs/developer-guide/shareable-configs)
