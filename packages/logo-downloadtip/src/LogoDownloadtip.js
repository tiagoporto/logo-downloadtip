import { css, html, LitElement } from 'lit-element'
import tippy from 'tippy.js'

import './logo-downloadtip.css'

export default class LogoDownloadtip extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block !important;
        outline: none;
      }
    `
  }

  static get properties() {
    return {
      width: { type: Number },
      position: { type: String },
      tooltipInstance: { type: Object },
      title: { type: String },
      images: { type: Object },
    }
  }

  constructor() {
    super()

    this.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      e.stopPropagation()
      this.downloadTip()
    })
  }

  downloadTip() {
    const options = {
      title: this.title || 'Download logo?',
      position: this.position || 'right',
    }

    // Create elements
    const tooltipTitle = `<h1>${options.title}</h1>`
    let links = ''

    // Get the logos
    const images = document.getElementsByTagName('link')

    Array.from(images).forEach((el) => {
      if (el.type.match(/image/)) {
        const { title } = el.dataset
        const { href } = el
        links += `<a href="${href}">${title}</a>`
      }
    })

    const content = `${tooltipTitle}<div class="content">${links}</div>`

    if (!this.tooltipInstance) {
      this.tooltipInstance = tippy(this, {
        content,
        interactive: true,
        trigger: 'manual',
        placement: options.position,
        theme: 'logo-downloadtip',
        inertia: true,
      })
    }

    if (
      this.tooltipInstance &&
      this.tooltipInstance.state &&
      this.tooltipInstance.state.isShown
    ) {
      this.tooltipInstance.hide(400)
    } else {
      this.tooltipInstance.show(400)
    }
  }

  render() {
    return html`
      <slot></slot>
    `
  }
}
