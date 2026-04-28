import 'urlpattern-polyfill'
import { Router } from '@lit-labs/router'
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { appRoutes } from './routes'
import styles from './main.css.ts'

const homeHref = import.meta.env.BASE_URL

@customElement('app-root')
class AppRoot extends LitElement {
  static styles = styles

  private router = new Router(this, appRoutes)

  render() {
    return html`
      <div class="app-root">
        <header class="header">
          <a class="brand" href=${homeHref}>MonPoke</a>
    
          <nav aria-label="Main navigation">
            <a class="nav-link" href=${homeHref}>Overview</a>
          </nav>
        </header>

        <main class="outlet">${this.router.outlet()}</main>
      </div>
    `
  }
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = '<app-root></app-root>'

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppRoot
  }
}
