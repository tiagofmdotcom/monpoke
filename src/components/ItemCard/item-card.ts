import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js';

import * as styles from './item-card.css'

@customElement('item-card')
export class ItemCard extends LitElement {
  protected createRenderRoot() {
    return this
  }

  render() {
    return html`
      <article class=${styles.card}>
          <img src="https://placekittens.com/200/200" width="200" height="200" alt="Item card" />
        <footer>
          <span>Name</span>
          <span>☘️☠️</span>
        </footer>
      </article>`
  }
}
