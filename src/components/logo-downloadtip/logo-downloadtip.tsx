import { Component, Prop, h, Element, Listen, Host } from '@stencil/core'
import tippy from 'tippy.js'

@Component({
  tag: 'logo-downloadtip',
  styleUrl: 'logo-downloadtip.css',
  shadow: false,
})
export class LogoDownloadtip {
  @Prop() header = 'Download logo?'
  @Prop() theme: 'dark' | 'light' = 'light'
  @Prop() position: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'
    = 'right'

  @Prop() images: {
    link: string
    title: string
  }[] = []

  private tooltipInstance

  @Element() el: HTMLElement

  @Listen('contextmenu')
  onContextMenu(event: Event) {
    event.preventDefault()
    event.stopPropagation()
    this.downloadTip()
  }

  private downloadTip(): void {
    const options = {
      title: this.header,
      position: this.position,
    }

    const tooltipTitle = `<h1>${options.title}</h1>`
    let links = ''

    for (const image of this.images) {
      links += `<a href="${image.link}" target="_blank">${image.title}</a>`
    }

    const content = `${tooltipTitle}<div class="content">${links}</div>`

    this.tooltipInstance = tippy(this.el.firstElementChild, {
      content,
      allowHTML: true,
      interactive: true,
      trigger: 'manual',
      arrow: false,
      placement: options.position,
      // theme: 'logo-downloadtip',
      theme: this.theme === 'dark' ? 'translucent' : 'light',
      inertia: true,
    })

    if (this.tooltipInstance?.state && this.tooltipInstance.state.isShown) {
      this.tooltipInstance.hide(400)
    } else {
      this.tooltipInstance.show(400)
    }
    return
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}
