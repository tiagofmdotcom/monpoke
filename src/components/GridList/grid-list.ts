import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import '@components/ItemCard/item-card'

import styles from './grid-list.css.ts'

@customElement('grid-list')
export class GridList extends LitElement {
  static styles = styles

  render() {
    return html`
      <section class="grid">
        <item-card></item-card>
        <item-card></item-card>
        <item-card></item-card>
      </section>
    `
  }
}
