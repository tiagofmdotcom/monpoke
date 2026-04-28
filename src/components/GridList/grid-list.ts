import { SignalWatcher, html } from '@lit-labs/signals'
import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import '@components/ItemCard/item-card'
import '@components/Loading/loading'

import styles from './grid-list.css.ts'
import { isFetchingProducts, productList } from '~/state/products'

@customElement('grid-list')
export class GridList extends SignalWatcher(LitElement) {
  static styles = styles

  render() {
    const products = productList.get()
    const isFetching = isFetchingProducts.get()

    return html`
      <section class="grid">
        ${isFetching ? html`<loading-indicator message="Loading products..."></loading-indicator>` : ''}
        ${!isFetching && products.length === 0 ? html`<div class="empty">No products found</div>` : ''}
        ${!isFetching && products.length > 0 ? products.map(
          (product) => html`
          <a href="#">
            <item-card
                .badge=${`#${product.id}`}
                .name=${product.name}
                .imageUrl=${product.imageUrl}
                .types=${product.types}
              ></item-card>
            </a>
            `,
          ) : ''}
      </section>
    `
  }
}
