/* eslint-disable react/prop-types */
import './style.css';

const Card = ({img, descr, price, additional}) => {
  return (
    <li className="product-wrapper">
    <div className="product-item">
      <img src={img} className="product-img" />
      <div className="product-list">
        <p className='product-descr'>{descr}</p>
        <span className="product-price">{price}</span>
        <p className='product-additional'>{additional}</p>
        <div className='meta'>
          <div className="rating-result">
            <span className="star active-star"></span>
            <span className="star active-star"></span>
            <span className="star active-star"></span>
            <span className="star"></span>
            <span className="star"></span>
          </div>
          <div className='buttons'>
            <a href='' className="btn btn-cart"></a>
            <a href='' className="btn btn-favorites"></a>
          </div>
        </div>
      </div>
    </div>
  </li>
     );
}
 
export default Card;