import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import '@components/Button/button'
import '@components/FilterSidebar/filter-sidebar'
import '@components/GridList/grid-list'

import styles from './home-page.css.ts'
import { currentOffset, fetchProducts, loadNextPage, loadPreviousPage } from '~/state/products.ts';

@customElement('home-page')
export class HomePage extends LitElement {
  static styles = styles

  connectedCallback() {
    super.connectedCallback()
    fetchProducts()
  }


  render() {
    return html`
      <section class="page">
        <h1>This are our products</h1>

        <div class="content">
          <filter-sidebar></filter-sidebar>
          <grid-list></grid-list>

          <div class="pagination">
            <navigation-button @click=${loadPreviousPage} disabled=${currentOffset.get() === 0}>« Previous</navigation-button>
            <navigation-button @click=${loadNextPage}>Next »</navigation-button>
          </div>
        </div>
      </section>
    `
  }
}
