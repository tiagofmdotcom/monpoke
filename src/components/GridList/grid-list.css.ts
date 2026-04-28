import { css } from 'lit'

export default css`
  .grid {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(4, 1fr);
  }
  .grid a {
    color: inherit;
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .loading {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #000;
  }
`
