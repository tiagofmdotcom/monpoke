import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import '@components/ItemCard/item-card'

import * as styles from './grid-list.css'

@customElement('grid-list')
export class GridList extends LitElement {
  protected createRenderRoot() {
    return this
  }

  render() {
    return html`
      <section class=${styles.grid}>
        <item-card></item-card>
        <item-card></item-card>
        <item-card></item-card>
      </section>
    `
  }
}
