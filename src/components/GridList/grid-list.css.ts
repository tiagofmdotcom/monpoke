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

  @media (max-width: 850px) {
    .grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`
