import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import * as styles from './grid-list.css'

@customElement('grid-list')
export class GridList extends LitElement {
  protected createRenderRoot() {
    return this
  }

  render() {
    return html`<section class=${styles.gridStyle}>tbd</section>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'grid-list': GridList
  }
}
