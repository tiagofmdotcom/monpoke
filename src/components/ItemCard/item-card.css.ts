import { css } from 'lit'

export default css`
  .card {
    background-color: white;
    border: 1px solid #ddd;
    transition: all 0.3s ease-in-out;
    border-radius: 12px;
    display: inline-grid;
    height: 100%;
    position: relative;
    width: 100%;
    box-sizing: border-box;
  }
  .card:hover {
    border-color: #ccc;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }
  .card-badge {
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #ddd;
    border-radius: 999px;
    color: #333;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    padding: 6px 8px;
    position: absolute;
    right: 8px;
    top: 8px;
    z-index: 1;
  }
  
  .card-image {
    overflow: hidden;
    border-radius: 12px 12px 0 0;
    min-width: 96px;
    aspect-ratio: 1 / 1;
  }
  .card-image img {
    transition: transform 0.3s ease-in-out;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .card-image img:hover {
    transform: scale(1.10);
  }
  .card-footer {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px;
    border-top: 1px solid #ddd;
  }
  .type-list {
    display: flex;
    gap: 6px;
  }
  .type-dot {
    background: var(--type-color);
    border-radius: 999px;
    display: inline-block;
    height: 16px;
    width: 16px;
  }
`
