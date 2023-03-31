import { cardList } from "./../../helpers/CardList";
import Card from "../Card/Card";

import "./style.scss";

const ListProducts = () => {
  return (
    <ul className="products">
      {cardList.map((card, index) => {
        return (
          <Card
            key={index}
            descr={card.descr}
            image={card.image}
            price={card.price}
            additional={card.additional}
          />
        );
      })}
    </ul>
  );
};

export default ListProducts;
