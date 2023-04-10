import "./style.scss";
import { CardProps } from "./interface";

const Card: React.FC<CardProps> = ({ id, image, name, onClick }) => {
  return (
    <li key={id} className="product-wrapper">
      <div className="product-item" onClick={onClick}>
        <img src={image} className="product-image" />
        <div className="product-list">
          <div className="product-content">
            <h4 className="product-descr">{name}</h4>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
