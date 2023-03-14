import "./style.scss";

const Card = ({ image, descr, price, additional }) => {
  return (
    <li className="product-wrapper">
      <div className="product-item">
        <img src={image} className="product-image" />
        <div className="product-list">
          <div className="product-content">
            <p className="product-descr">{descr}</p>
            <span className="product-price">{price}</span>
            <p className="product-additional">{additional}</p>
          </div>
          <div className="meta">
            <div className="rating-result">
              <span className="star active-star"></span>
              <span className="star active-star"></span>
              <span className="star active-star"></span>
              <span className="star"></span>
              <span className="star"></span>
            </div>
            <div className="buttons">
              <button className="btn btn-cart"></button>
              <button className="btn btn-favorites"></button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
