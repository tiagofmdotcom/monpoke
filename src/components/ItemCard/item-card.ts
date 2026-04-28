import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './item-card.css.ts';

@customElement('item-card')
export class ItemCard extends LitElement {
  static styles = styles;

  @property({ type: String })
  declare name: string;

  @property({ type: String })
  declare imageUrl: string;

  @property({ attribute: false })
  declare types: string[];

  constructor() {
    super();

    this.name = '';
    this.imageUrl = '';
    this.types = [];
  }

  render() {
    return html`
      <article class="card">
        <img src=${this.imageUrl} width="200" height="200" alt=${this.name} />
        <footer>
          <span>${this.name}</span>
          <span>${this.types.join(', ')}</span>
        </footer>
      </article>
    `;
  }
}
