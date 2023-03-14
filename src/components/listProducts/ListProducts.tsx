import { cardList } from "./../../helpers/CardList";
import Card from "./../../components/card/Card";

import './style.scss';

// const filtredCardList = () => {
//   cardList.filter((card) => {
//     const allCard = card.descr + card.additional + card.price;
//     return allCard.toLowerCase().indexOf(this.state.inputValue) !== -1;
//   });
// };

const ListProducts = () => {
  return (
    <ul className="products">
      {cardList.map((card, index) => {
        return (
          <Card
            key={index}
            descr={card.descr}
            image={card.img}
            price={card.price}
            additional={card.additional}
          />
        );
      })}
    </ul>
  );
};

export default ListProducts;
