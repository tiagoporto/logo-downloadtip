# Logo Downloadtip ![Open Source Love](https://badges.frapsoft.com/os/v3/open-source.svg)

<p align="right">
  <code>LIKED ? Leave a <a href="https://github.com/tiagoporto/logo-downloadtip/stargazers">⭐</a> : <a href="https://github.com/tiagoporto/logo-downloadtip/issues">😞</a></code>
</p>

[![Release](https://img.shields.io/npm/v/logo-downloadtip.svg?style=flat-square&label=release)](https://github.com/tiagoporto/logo-downloadtip/releases)

[![Downloads](https://img.shields.io/npm/dt/logo-downloadtip.svg?style=flat-square)](https://www.npmjs.com/package/logo-downloadtip)
[![install size](https://packagephobia.now.sh/badge?p=logo-downloadtip)](https://packagephobia.now.sh/result?p=logo-downloadtip)

<!-- [![Build Status](https://img.shields.io/travis/com/tiagoporto/logo-downloadtip/main.svg?label=tests&logo=travis&style=flat-square)](https://travis-ci.com/tiagoporto/logo-downloadtip)
[![Coverage Status](https://img.shields.io/coveralls/tiagoporto/logo-downloadtip.svg?style=flat-square)](https://coveralls.io/github/tiagoporto/logo-downloadtip)
[![Mutation testing cover](https://badge.stryker-mutator.io/github.com/tiagoporto/logo-downloadtip/main)](https://stryker-mutator.github.io) -->

[![devDependencies Status](https://img.shields.io/david/dev/tiagoporto/logo-downloadtip.svg?style=flat-square)](https://david-dm.org/tiagoporto/logo-downloadtip?type=dev)

> Webcomponent to allow users download multiple logotype image types when they trying to grab low resolution logo.

The original ideia for this project was by [Nicklas Jarnesjö](https://github.com/jarnesjo/jquery-logo-downloadtip) after seeing [relogo](http://relogo.org/), but the [microformats](http://microformats.org/wiki/rel-logo) rejected the initiative, the project was discontinued and I decided to continue.

## Installation

```bash
npm i logo-downloadtip
```

## Usage

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

## Options

```html
<logo-downloadtip title="Tolltip Title" position="top|bottom|right|left">
</logo-downloadtip>
```

## License

This project is licensed under the [license](LICENSE).
