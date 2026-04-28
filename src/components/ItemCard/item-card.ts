import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import styles from './item-card.css.ts';

@customElement('item-card')
export class ItemCard extends LitElement {
  static styles = styles;

  render() {
    return html`
      <article class="card">
        <img src="https://placekittens.com/200/200" width="200" height="200" alt="Item card" />
        <footer>
          <span>Name</span>
          <span>☘️☠️</span>
        </footer>
      </article>
    `;
  }
}
