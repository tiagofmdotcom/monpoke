import { css } from 'lit'

export default css`
  .content {
    display: grid;
    gap: 16px;
    grid-template-columns: 200px 1fr;
  }
  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-column: 2;
  }
`
