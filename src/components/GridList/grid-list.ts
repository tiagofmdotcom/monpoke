import { SignalWatcher, html } from '@lit-labs/signals'
import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import '@components/ItemCard/item-card'

import styles from './grid-list.css.ts'
import { filteredProducts } from '~/state/products'

@customElement('grid-list')
export class GridList extends SignalWatcher(LitElement) {
  static styles = styles

  render() {
    const products = filteredProducts.get()

    return html`
      <section class="grid">
        ${products.map(
          (product) => html`
            <item-card
              .name=${product.name}
              .imageUrl=${product.imageUrl}
              .types=${product.types}
            ></item-card>
          `,
        )}
      </section>
    `
  }
}
