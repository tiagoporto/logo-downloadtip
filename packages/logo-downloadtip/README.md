# Logo Downloadtip

Webcomponent to allow users download multiple logotype image types when they trying to grab low resolution logo.

> The original idea for this project was by [Nicklas Jarnesjö](https://github.com/jarnesjo/jquery-logo-downloadtip)

## Install

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

### Options

```html
<logo-downloadtip title="Tooltip Title" position="top|bottom|right|left">
</logo-downloadtip>
```

## License

Logo Downloadtip © 2019 by Tiago Porto is licensed under [MIT License](LICENSE).
