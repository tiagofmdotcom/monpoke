import { css } from 'lit'

export default css`
  .page {
    padding: 16px;
  }
  .content {
    display: grid;
    gap: 16px;
    grid-template-columns: 180px 1fr;
  }
  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-column: 2;
  }
  @media (max-width: 850px) {
    .pagination {
      flex-direction: column;
      gap: 12px;
    }
  }
  h1 {
    margin-top: 0;
  }
`
