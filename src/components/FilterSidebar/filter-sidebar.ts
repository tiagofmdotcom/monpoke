import { LitElement, html } from 'lit'
import { customElement, state } from 'lit/decorators.js';

import '@components/CheckboxGroup/checkbox-group'

import styles from './filter-sidebar.css.ts'
import type { CheckboxGroupOption } from '@components/CheckboxGroup/checkbox-group.types';
import type { CheckboxGroup } from '@components/CheckboxGroup/checkbox-group';

@customElement('filter-sidebar')  
export class FilterSidebar extends LitElement {
  static styles = styles

  @state()
  declare filterOptions: CheckboxGroupOption[]

  @state()
  declare filterValue: string[]

  constructor() {
    super()

    this.filterOptions = [
      { label: 'Grass', value: 'grass' },
      { label: 'Fire', value: 'fire' },
      { label: 'Water', value: 'water' },
    ]
    this.filterValue = []
  }

  handleFilterChange(event: Event) {
    const checkboxGroup = event.target as CheckboxGroup
    this.filterValue = checkboxGroup.value
    console.log(this.filterValue)
  }

  render() {
    return html`
      <aside class="sidebar">Filters
        <checkbox-group
          label="Type"
          @change=${this.handleFilterChange}
          .options=${this.filterOptions}
          .value=${this.filterValue || []}
        ></checkbox-group>
      </aside>`
  }
}
