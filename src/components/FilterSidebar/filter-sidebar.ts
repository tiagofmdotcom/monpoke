import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js';

import '@components/CheckboxGroup/checkbox-group'

import * as styles from './filter-sidebar.css'

@customElement('filter-sidebar')  
export class FilterSidebar extends LitElement {
  protected createRenderRoot() {
    return this
  }

  render() {
    return html`
      <aside class=${styles.sidebar}>
        Filters
      </aside>`
  }
}
