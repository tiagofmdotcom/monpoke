import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './item-card.css.ts';
import type { ProductType } from '~/state/products.ts';

@customElement('item-card')
export class ItemCard extends LitElement {
  static styles = styles;

  @property({ type: String })
  declare name: string;

  @property({ type: String })
  declare imageUrl: string;

  @property({ attribute: false })
  declare types: ProductType[];

  constructor() {
    super();

    this.name = '';
    this.imageUrl = '';
    this.types = [];
  }

  render() {
    return html`
      <article class="card">
        <div class="card-image">
          <img src=${this.imageUrl} width="96" height="96" alt=${this.name} />
        </div>
        <footer class="card-footer">
          <span>${this.name}</span>
          <span class="type-list" role="list" aria-label="Product types">
            ${this.types.map((type) => html`
              <span class="type-dot"
                role="listitem" 
                aria-label=${type.name}
                style="--type-color: ${type.color}" title=${type.name} 
              ></span>
            `)}
          </span>
        </footer>
      </article>  
    `
  }
}
