import { css } from 'lit'

export default css`
  :host {
    display: block;
  }

  .app-root {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    background-color: #f0f0f0;
    border-bottom: 1px solid #e0e0e0;
    padding: 16px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
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

  @media (min-width: 1600px) {
    .outlet {
      max-width: 1600px;
    }
  }
`
