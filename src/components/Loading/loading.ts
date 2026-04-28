import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import styles from './loading.css.ts'

@customElement('loading-indicator')
export class LoadingIndicator extends LitElement {
  static styles = styles

  @property({ type: String })
  declare message: string

  render() {
    return html`
      <div class="loading" role="status" aria-live="polite">
        <span class="spinner" aria-hidden="true"></span>
        <span>${this.message}</span>
      </div>
    `
  }
}
