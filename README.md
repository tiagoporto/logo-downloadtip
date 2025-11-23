# Logo Downloadtip

[![version](https://img.shields.io/npm/v/logo-downloadtip?style=flat-square)][npm-link]
[![Downloads](https://img.shields.io/npm/dm/logo-downloadtip.svg?style=flat-square)][npm-link]
[![npm bundle size](https://img.shields.io/bundlephobia/min/logo-downloadtip?style=flat-square)](https://bundlephobia.com/package/logo-downloadtip)

<!-- [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg?style=flat-square)](https://www.webcomponents.org/element/logo-downloadtip) -->

Webcomponent to allow users download multiple logotype image types when they trying to grab low resolution logo.

> The original idea for this project was by [Nicklas Jarnesjö](https://github.com/jarnesjo/jquery-logo-downloadtip)

## ▶️ Demo

<https://tiagoporto.github.io/logo-downloadtip/>

## ✅ Status

[![Docs GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/logo-downloadtip/check-docs.yml?branch=main&label=docs&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/logo-downloadtip/actions/workflows/check-docs.yml?query=branch%3Amain)
[![Checks GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/logo-downloadtip/checks.yml?branch=main&label=checks&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/logo-downloadtip/actions/workflows/checks.yml?query=branch%3Amain)

<!-- [![Tests GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/logo-downloadtip/unit-tests.yml?branch=main&label=unit%20tests&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/logo-downloadtip/actions/workflows/unit-tests.yml?query=branch%3Amain) -->
<!-- [![E2E Tests GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/logo-downloadtip/e2e-tests.yml?branch=main&label=e2e%20tests&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/logo-downloadtip/actions/workflows/e2e-tests.yml?query=branch%3Amain) -->
<!-- [![Coverage Status](https://img.shields.io/codecov/c/github/tiagoporto/logo-downloadtip/main?style=flat-square)](https://app.codecov.io/gh/tiagoporto/logo-downloadtip/tree/main) -->

![Website](https://img.shields.io/website.svg?logo=githubpages&down_message=offline&up_message=online&style=flat-square&url=https://tiagoporto.com/logo-downloadtip)
![W3C Validation](https://img.shields.io/w3c-validation/html.svg?style=flat-square&targetUrl=https://tiagoporto.com/logo-downloadtip/)

## 📦 Install

```bash
npm i logo-downloadtip
```

## ⚙️ Usage

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
<logo-downloadtip title="Tooltip Title" position="top|bottom|right|left">
</logo-downloadtip>
```

## 🛠 Development

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

## 🤝 Contributing

[Check how to contribute](https://github.com/tiagoporto/.github/blob/main/CONTRIBUTING.md).

## 📄 License

Logo Downloadtip © 2019 by Tiago Porto is licensed under [MIT License](LICENSE).

[npm-link]: https://www.npmjs.com/package/logo-downloadtip
