import { html, render } from 'lit-html';
import '../src/logo-downloadtip.js';

render(
  html`
    <logo-downloadtip>
      <img
        src="https://raw.githubusercontent.com/tiagoporto/jquery-logo-downloadtip/master/img/webready_sweden_logo.png"
        alt="Logo"
      />
    </logo-downloadtip>
  `,
  document.querySelector('#demo'),
);
