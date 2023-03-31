import { cardList } from "./../../helpers/CardList";
import Card from "../Card/Card";

import "./style.scss";

const ListProducts = () => {
  return (
    <ul className="products">
      {cardList.map(({ descr, image, price, additional }, index) => {
        return (
          <Card
            key={index}
            descr={descr}
            image={image}
            price={price}
            additional={additional}
          />
        );
      })}
    </ul>
  );
};

export default ListProducts;
