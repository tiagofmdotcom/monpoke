import { css } from 'lit'

export default css`
  :host {
    display: inline-block;
  }

  .button {
    border: 1px solid #394ac4;
    border-radius: 999px;
    background: #394ac4;
    color: #fff;
    cursor: pointer;
    font: inherit;
    font-weight: 600;
    padding: 10px 18px;
    transition:
      background-color 0.2s ease,
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      transform 0.2s ease;
  }

  .button:hover {
    background: #1d4ed8;
    border-color: #1d4ed8;
    box-shadow: 0 8px 16px rgba(37, 99, 235, 0.2);
  }

  .button:focus-visible {
    outline: 3px solid rgba(37, 99, 235, 0.35);
    outline-offset: 2px;
  }

  .button:active {
    transform: translateY(0);
  }

  .button:disabled {
    background: #94a3b8;
    border-color: #94a3b8;
    box-shadow: none;
    cursor: not-allowed;
    transform: none;
  }
`
