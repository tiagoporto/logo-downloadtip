# Logo Downloadtip

[![Release](https://img.shields.io/npm/v/logo-downloadtip.svg?style=flat-square&label=release)](https://github.com/tiagoporto/logo-downloadtip/releases)
[![Downloads](https://img.shields.io/npm/d18m/logo-downloadtip.svg?style=flat-square)](https://www.npmjs.com/package/logo-downloadtip)
[![install size](https://packagephobia.com/badge?p=logo-downloadtip)](https://packagephobia.com/result?p=logo-downloadtip)

<!-- [![Build Status](https://img.shields.io/travis/com/tiagoporto/logo-downloadtip/main.svg?label=tests&logo=travis&style=flat-square)](https://travis-ci.com/tiagoporto/logo-downloadtip)
[![Coverage Status](https://img.shields.io/coveralls/tiagoporto/logo-downloadtip.svg?style=flat-square)](https://coveralls.io/github/tiagoporto/logo-downloadtip)
[![Mutation testing cover](https://badge.stryker-mutator.io/github.com/tiagoporto/logo-downloadtip/main)](https://stryker-mutator.github.io) -->

Webcomponent to allow users download multiple logotype image types when they trying to grab low resolution logo.

> The original ideia for this project was by [Nicklas Jarnesjö](https://github.com/jarnesjo/jquery-logo-downloadtip), the idea is amazing I’ve create a modern version.

## 🧰 Stack

![node](https://img.shields.io/badge/Nodejs-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white)
![nvm](https://img.shields.io/badge/nvm-%23333?style=for-the-badge&logo=nvm)
![pnpm](https://img.shields.io/badge/pnpm-%231A191B?style=for-the-badge&logo=pnpm)
![vs code](https://img.shields.io/badge/VS%20Code-0078d7.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTIzLjE1IDIuNTg3IDE4LjIxLjIxYTEuNDk0IDEuNDk0IDAgMCAwLTEuNzA1LjI5bC05LjQ2IDguNjMtNC4xMi0zLjEyOGEuOTk5Ljk5OSAwIDAgMC0xLjI3Ni4wNTdMLjMyNyA3LjI2MUExIDEgMCAwIDAgLjMyNiA4Ljc0TDMuODk5IDEyIC4zMjYgMTUuMjZhMSAxIDAgMCAwIC4wMDEgMS40NzlMMS42NSAxNy45NGEuOTk5Ljk5OSAwIDAgMCAxLjI3Ni4wNTdsNC4xMi0zLjEyOCA5LjQ2IDguNjNhMS40OTIgMS40OTIgMCAwIDAgMS43MDQuMjlsNC45NDItMi4zNzdBMS41IDEuNSAwIDAgMCAyNCAyMC4wNlYzLjkzOWExLjUgMS41IDAgMCAwLS44NS0xLjM1MnptLTUuMTQ2IDE0Ljg2MUwxMC44MjYgMTJsNy4xNzgtNS40NDh2MTAuODk2eiIvPjwvc3ZnPg==)

![git](https://img.shields.io/badge/git-%23F05032?style=for-the-badge&logo=git&logoColor=white)
![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-%23FE5196?style=for-the-badge&logo=conventional%20commits&logoColor=white)
![Semantic Release](https://img.shields.io/badge/Semantic%20Release-%23494949?style=for-the-badge&logo=semantic-release)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Svelte](https://img.shields.io/badge/react-%232323272E?style=for-the-badge&logo=svelte)
![inlang](https://img.shields.io/badge/inlang-%23F8FAFC?style=for-the-badge)

<!-- ![Sass](https://img.shields.io/badge/sass-%23CC6699?style=for-the-badge&logo=sass&logoColor=white) -->

![tailwindcss](https://img.shields.io/badge/tailwind-%2306B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![PostCSS](https://img.shields.io/badge/postcss-%23DD3A0A?style=for-the-badge&logo=postcss)
![Autoprefixer](https://img.shields.io/badge/autoprefixer-%23DD3735?style=for-the-badge&logo=autoprefixer&logoColor=white)

<!-- ![CSS Modules](https://img.shields.io/badge/css%20modules-%23333?style=for-the-badge&logo=css-modules) -->

![PWA](https://img.shields.io/badge/pwa-%235A0FC8?style=for-the-badge&logo=pwa&logoColor=white)
![Browserslist](https://img.shields.io/badge/Browserslist-%23FED538.svg?style=for-the-badge&color=%23FFD539&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMC4xIDMyIj48cGF0aCBkPSJNMjIuNCAxMS41Yy0uMS0uMy0uNC0uNi0uNy0uOC4yLjQgMCAuOC0uMyAxLS4zLjEtLjcgMC0uOS0uNS0uMS0uMyAwLS41IDAtLjdoLS4zYy0uOC4zLTEuMiAxLjMtLjkgMi4xLjMuOCAxLjMgMS4yIDIuMS44czEuMi0xLjMuOS0yLjFaIi8+PHBhdGggZD0iTTE5LjQgMTkuMmMzLjEtLjUgNi4xLTEuNiA4LjgtMy4xaC4xYzEuMS0uOSAyLjItMi41LjctMy4zLS43LS40LTEuNCAwLTEuOS40LTIuNS0xLTQuMy0zLjEtNC44LTUuNiAyLjEtLjkgNC41LTEgNi42LS4zLTIuOS0zLjEtNi4zLTMuOC04LjQtMy44LjItLjcuOC0xIDEuNy0xLjktMi43LS42LTYuMSAxLjEtNy4yIDIuMi0uNC0uNS0xLTIuMy0xLTMuMy0xLjQuNC0yLjkgMy4yLTMuMSA0LjQtLjctLjQtMS43LTEuOC0yLjEtMi43LTEgLjgtMS43IDMuNy0xLjYgNS4zLTEuMS0uNC0yLjEtMS4xLTIuOS0yLS43IDIuMi0uMiAzLjcuNSA1LjMtLjguMi0yLjYtLjItMy40LS42LS4zIDIuMiAxLjMgNCAyLjMgNC42LS44LjQtMi4zLjUtMy41LjYuNSAxLjggMi41IDIuOSAzLjggMy42LTEgMS0yIDEuNi0yLjkgMi4xIDEuMyAxLjIgMyAxLjkgNC44IDIuMS0uNC43LTEuMiAyLjMtMS44IDMuMSAxLjIuMyA0LjMgMCA0LjgtLjItLjMgMS41LS41IDIuOSAwIDQgMS0uNSAzLjItMS44IDMuOS0yLjMgMCAxLjYuOCAzLjEgMi4yIDMuOS4yLTEuMSAxLjMtMyAxLjktMy40LjQuNyAyLjIgMi43IDMuNSAyLjcgMC0xLjIuMi0zIC42LTMuNiAxLjEuNyAzLjIgMS42IDQuOS45LS44LS43LTEuNy0yLjQtMS42LTMuMiAyLjYtLjUgNC4yLTIgNC42LTMuOC0yLjcgMS4zLTcuMS44LTkuNS0yLjFabTcuMy01LjNzLjIgMCAuMy4xYy41LjMuNi44LjQgMS4zIDAgLjItLjIuNC0uNS41LTIuNiAxLjUtNS40IDIuMi04LjEgMi42LS43LTEuMS0xLjEtMi42LTEuMS00LjQgMC0yLjggMS42LTQuOSAzLjctNi4xLjcgMi43IDIuNiA0LjkgNS4yIDZaIi8+PC9zdmc+)

<!-- ![Rollup](https://img.shields.io/badge/rollup-%231B1B1F?style=for-the-badge&logo=rollup.js) -->

![Vite](https://img.shields.io/badge/vite-%23646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vitest](https://img.shields.io/badge/vitest-%231C1B1F?style=for-the-badge&logo=vitest)
![Playwright](https://img.shields.io/badge/playwright-%2369D3A7?style=for-the-badge&logo=playwright&logoColor=white)

![EditorConfig](https://img.shields.io/badge/EditorConfig-%23E0EFEF.svg?style=for-the-badge&logo=editorconfig&logoColor=black)
![Prettier](https://img.shields.io/badge/Prettier-1A2B34.svg?style=for-the-badge&logo=prettier)
![Eslint](https://img.shields.io/badge/ESLint-%234B32C3.svg?style=for-the-badge&logo=eslint&logoColor=white)
![Stylelint](https://img.shields.io/badge/Stylelint-%231B3A4B.svg?style=for-the-badge&logo=stylelint&logoColor=white)
![Remark](https://img.shields.io/badge/Remark-%230A0E0F.svg?style=for-the-badge&logo=remark&logoColor=d80303)
![Husky](https://img.shields.io/badge/%F0%9F%90%B6%20Husky-%23161618.svg?style=for-the-badge)
![Lint Staged](https://img.shields.io/badge/%F0%9F%9A%AB%20Lint%20Staged-%23fef9f9.svg?style=for-the-badge)
![Commitlint](https://img.shields.io/badge/Commitlint-%23000.svg?style=for-the-badge&logo=commitlint&logoColor=white)

![Coveralls](https://img.shields.io/badge/coveralls-%233F5767?style=for-the-badge&logo=coveralls)
![Dependabot](https://img.shields.io/badge/dependabot-%23025E8C?style=for-the-badge&logo=dependabot&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Github%20Pages-%23222222?style=for-the-badge&logo=githubpages&logoColor=white)

## Installation 📦

```bash
npm i logo-downloadtip
```

## Usage ➡️

```html
<html>
  <head>
    <link
      rel="icon"
      type="image/svg"
      href="./img/logo.svg"
      data-title="Vector file (.svg)"
    />
  </head>

  <logo-downloadtip>
    <img src="./img/logo.svg" alt="Logo" />
  </logo-downloadtip>

  <script type="module" src="./logo-downloadtip.js"></script>
</html>
```

### Options

```html
<logo-downloadtip title="Tolltip Title" position="top|bottom|right|left">
</logo-downloadtip>
```

## Development 🛠

### Pre-requirements

- [git](https://git-scm.com)
- [nvm](https://github.com/nvm-sh/nvm)

### Install node

```bash
nvm install
```

### Install pnpm

```bash
corepack enable pnpm
```

### Install dependencies

```bash
pnpm install
```

### Install

```bash
pnpm install
```

## License 📄

This project is licensed under the [MIT License](LICENSE).
