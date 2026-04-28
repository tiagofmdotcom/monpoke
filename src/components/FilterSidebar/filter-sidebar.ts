import { SignalWatcher, html } from '@lit-labs/signals'
import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import '@components/CheckboxGroup/checkbox-group'

import styles from './filter-sidebar.css.ts'
import type { CheckboxGroupChangeEvent } from '@components/CheckboxGroup/checkbox-group.types'
import { fetchProducts, fetchTypes, productTypeOptions, selectedProductTypes } from '~/state/products'

@customElement('filter-sidebar')  
export class FilterSidebar extends SignalWatcher(LitElement) {
  static styles = styles

  connectedCallback() {
    super.connectedCallback()
    fetchTypes()
  }

  handleFilterChange(event: CheckboxGroupChangeEvent) {
    selectedProductTypes.set(event.detail.value)
    fetchProducts(false)
    console.log(selectedProductTypes.get())
  }

  render() {
    return html`
      <aside class="sidebar">Filters
        <checkbox-group
          label="Type"
          @change=${this.handleFilterChange}
          .options=${productTypeOptions}
          .value=${selectedProductTypes}
        ></checkbox-group>
      </aside>`
  }
}
