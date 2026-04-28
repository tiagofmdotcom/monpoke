import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import styles from './checkbox-group.css.ts'
import type { CheckboxGroupLabel, CheckboxGroupOption } from '@components/CheckboxGroup/checkbox-group.types';


@customElement('checkbox-group')
export class CheckboxGroup extends LitElement {
  static styles = styles

  @property({ type: String })
  declare label: CheckboxGroupLabel

  @property({ attribute: false })
  declare options: CheckboxGroupOption[]

  @property({ attribute: false })
  declare value: string[]

  constructor() {
    super()

    this.label = ''
    this.options = []
    this.value = []
  }

  render() {
    return html`
      <fieldset class="group">
        ${this.label ? html`<legend class="label">${this.label}</legend>` : null}

        ${this.options.map(
          (option) => html`
            <label class="option">
              <input
                type="checkbox"
                .checked=${this.value.includes(option.value)}
                @change=${(event: Event) => this.handleOptionChange(event, option.value)}
              />
              <span>${option.label}</span>
            </label>
          `,
        )}
      </fieldset>
    `
  }

  private handleOptionChange(event: Event, optionValue: string) {
    event.stopPropagation()

    const input = event.currentTarget as HTMLInputElement
    this.value = input.checked
      ? [...this.value, optionValue]
      : this.value.filter((selectedValue) => selectedValue !== optionValue)

    this.dispatchEvent(
      new CustomEvent('change', {
        bubbles: true,
        composed: true,
        detail: { value: this.value },
      }),
    )
  }
}
