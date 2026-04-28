import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import '@components/FilterSidebar/filter-sidebar'
import '@components/GridList/grid-list'

import * as styles from './home-page.css'

@customElement('home-page')
export class HomePage extends LitElement {
  protected createRenderRoot() {
    return this
  }

  render() {
    return html`
      <section class=${styles.page}>
        <filter-sidebar></filter-sidebar>
        <grid-list></grid-list>
      </section>
    `
  }
}
