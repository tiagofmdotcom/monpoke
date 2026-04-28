import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import styles from './button.css.ts'

@customElement('navigation-button')
export class NavigationButton extends LitElement {
  static styles = styles

  @property({ type: Boolean, reflect: true })
  declare disabled: boolean

  constructor() {
    super()

    this.disabled = false
  }

  render() {
    return html`
      <button class="button" ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `
  }
}
