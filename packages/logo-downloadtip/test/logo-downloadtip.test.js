import { html, fixture, expect } from '@open-wc/testing'

import '../src/logo-downloadtip.js'

describe('<logo-downloadtip>', () => {
  it('has a default property header', async () => {
    const el = await fixture('<logo-downloadtip></logo-downloadtip>')
    expect(el.header).to.equal('My Example')
  })

  it('allows property header to be overwritten', async () => {
    const el = await fixture(html`
      <logo-downloadtip .header=${'different'}></logo-downloadtip>
    `)
    expect(el.header).to.equal('different')
  })
})
