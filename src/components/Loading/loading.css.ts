import { css } from 'lit'

export default css`
  :host {
    display: flex;
    grid-column: 1 / -1;
    justify-content: center;
    padding: 32px 16px;
  }

  .loading {
    align-items: center;
    color: #334155;
    display: inline-flex;
    font-size: 16px;
    font-weight: 600;
    gap: 12px;
  }

  .spinner {
    animation: spin 0.8s linear infinite;
    border: 3px solid #cbd5e1;
    border-radius: 999px;
    border-top-color: #2563eb;
    height: 24px;
    width: 24px;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`
