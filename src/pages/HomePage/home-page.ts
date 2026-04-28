import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import '@components/FilterSidebar/filter-sidebar'
import '@components/GridList/grid-list'

import styles from './home-page.css.ts'

@customElement('home-page')
export class HomePage extends LitElement {
  static styles = styles

  render() {
    return html`
      <section class="page">
        <filter-sidebar></filter-sidebar>
        <grid-list></grid-list>
      </section>
    `
  }
}
