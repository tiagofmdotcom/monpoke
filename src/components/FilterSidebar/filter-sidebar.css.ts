import { css } from 'lit'

export default css`
  :host {
    position: sticky;
    top: 16px;
    align-self: start;
    max-height: calc(100vh - 32px);
    overflow-y: auto;
    border-radius: 12px;
    border: 1px solid #ddd;
  }

  .sidebar {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-color: white;
  }

  .filters-title {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
  }
`
