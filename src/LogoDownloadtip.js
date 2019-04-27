import { html, css, LitElement } from 'lit-element';
import tippy from 'tippy.js';

export default class LogoDownloadtip extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
    `;
  }

  static get properties() {
    return {
      position: { type: String },
      tooltipInstance: { type: Object },
      title: { type: String },
      images: { type: Object },
    };
  }

  // constructor() {
  //   super();
  // }

  downloadTip() {
    const options = {
      title: this.title || 'Download logo?',
      position: this.position || 'right',
    };

    // Create elements
    const header = document.createElement('h3');
    header.innerText = options.title;
    const content = document.createElement('div');
    content.setAttribute('class', 'content');

    // Get the logos
    const images = document.getElementsByTagName('link');
    Array.from(images).forEach(el => {
      if (el.type.match(/image/)) {
        const { title } = el.dataset;
        const { href } = el;
        const logo = document.createElement('a');
        logo.innerText = title;
        logo.setAttribute('href', href);
        content.appendChild(logo);
      }
    });

    const container = document.createElement('div');
    container.append(header);
    container.append(content);

    if (!this.tooltipInstance) {
      this.tooltipInstance = tippy(this, {
        content: container.innerHTML,
        arrow: true,
        trigger: 'manual',
        interactive: true,
        placement: options.position,
        theme: 'logo-downloadtip',
      });
    }

    this.tooltipInstance.show(400);

    // Remove downloadtip
    document.addEventListener('mousedown', e => {
      this.tooltipInstance.hide(400);
    });
  }

  connectedCallback() {
    super.connectedCallback();

    // add old browser support
    this.addEventListener('contextmenu', e => {
      e.preventDefault();
      e.stopPropagation();
      this.downloadTip();
    });
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
