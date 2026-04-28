import { css } from 'lit'

export default css`
  :host {
    display: block;
    background-color: #f0f0f0;
  }

  .app-root {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 20px solid #222224;
    padding: 16px;
    background-color: #ee1515;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }
  
  .brand,
  .nav-link {
    color: white;
    text-decoration: none;
  }

  .brand:hover,
  .nav-link:hover {
    text-decoration: underline;
  }

  .brand {
    font-weight: bold;
    font-size: 24px;
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
