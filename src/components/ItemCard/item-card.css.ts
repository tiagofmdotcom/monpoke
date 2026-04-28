import { css } from 'lit'

export default css`
  .card {
    border: 1px solid #ddd;
    padding: 12px;
    transition: all 0.3s ease-in-out;
    border-radius: 12px;
    display: inline-grid;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }
  .card:hover {
    border-color: #ccc;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }

  img {
    transition: transform 0.3s ease-in-out;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .card img:hover {
    transform: scale(1.10);
  }
  .card-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`
