# Next Js - Dev Flow Project

## Project Setup

**VS Code Extensions**

1. Babel JavaScript
2. Better Comments
3. Catppuccin for VSCode
4. ESLint
5. IntelliCode
6. Material Icon Theme
7. npm Intellisense
8. Path Intellisense
9. Prettier - Code formatter
10. Prettier ESLint
11. Pretty TypeScript Errors
12. Tailwind CSS IntelliSense

**Create Project**
`npx create-next-app@latest`
With following options

- typescript
- tailwind
- app router
- turbopack

**Eslint**
Install Prettier, Prettier Eslint and Eslint VS Code plugin first

Install package `npm install eslint-config-standard`

Under `eslint.config.mjs`

add -> "standard"

Install Package `npm install eslint-plugin-tailwindcss`

Under `eslint.config.mjs`

add -> "plugin:tailwindcss/recommended"

Install Package `npm install eslint-config-prettier`

Under `eslint.config.mjs`

add -> "prettier"

Install Package `npm install eslint-plugin-import --save-dev`

Under `eslint.config.mjs`

How to configure this is unclear, as eslint.config.mjs is new

**Configure all settings of VS Code**

Create a folder `.vscode`

Under this create `settings.json`

## Authentication (OAuth)

Setup authentication for sign-in using Github or Google.

https://authjs.dev/
