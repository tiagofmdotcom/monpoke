import type { RouteConfig } from '@lit-labs/router'
import { html } from 'lit'
import '@pages/HomePage/home-page'

export const appRoutes = [
  {
    name: 'home',
    path: '/',
    render: () => html`<home-page></home-page>`,
  },
] satisfies RouteConfig[]
