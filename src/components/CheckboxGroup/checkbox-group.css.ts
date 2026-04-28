import { css } from 'lit'

export default css`
  .group {
    border: 0;
    display: grid;
    gap: 8px;
    margin: 0;
    padding: 0;
  }

  .label {
    margin-bottom: 4px;
    color: #333;
    margin-bottom: 6px;
  }

  .option {
    align-items: center;
    display: flex;
    gap: 8px;
  }

  .option-color {
    background: var(--option-color);
    border-radius: 999px;
    display: inline-block;
    height: 10px;
    width: 10px;
  }
`
