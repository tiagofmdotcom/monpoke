import { css } from 'lit'

export default css`
  :host {
    display: block;
  }

  .app-root {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  }

  .header {
    display: flex;
    justify-content: space-between;
  }

  .brand,
  .nav-link {
    color: inherit;
    text-decoration: none;
  }

  .brand:hover,
  .nav-link:hover {
    text-decoration: underline;
  }

  .brand {
    font-weight: bold;
  }

  .outlet {
    display: block;
  }
`
