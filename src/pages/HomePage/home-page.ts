import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import '@components/FilterSidebar/filter-sidebar'
import '@components/GridList/grid-list'

import styles from './home-page.css.ts'
import { fetchProducts, loadNextPage, loadPreviousPage } from '~/state/products.ts';

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
            <button @click=${loadPreviousPage}>Load previous page</button>
            <button @click=${loadNextPage}>Load next page</button>
          </div>
        </div>
      </section>
    `
  }
}
