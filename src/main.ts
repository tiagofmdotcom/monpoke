import 'urlpattern-polyfill'
import { Router } from '@lit-labs/router'
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { appRoutes } from './routes'
import * as styles from './main.css'

@customElement('app-root')
class AppRoot extends LitElement {
  private router = new Router(this, appRoutes)

  protected createRenderRoot() {
    return this
  }

  render() {
    return html`
      <div class=${styles.appRoot}>
        <header class=${styles.header}>
          <a class=${styles.brand} href="/">MonPoke</a>
    
          <nav aria-label="Main navigation">
            <a class=${styles.navLink} href="/">Overview</a>
          </nav>
        </header>

        <main class=${styles.outlet}>${this.router.outlet()}</main>
      </div>
    `
  }
}

document.body.classList.add(styles.body)
document.querySelector<HTMLDivElement>('#app')!.innerHTML = '<app-root></app-root>'

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppRoot
  }
}
