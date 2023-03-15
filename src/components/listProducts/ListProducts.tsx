import { cardList } from "./../../helpers/CardList";
import Card from "./../../components/card/Card";

import "./style.scss";

const ListProducts = () => {
  return (
    <ul className="products">
      {cardList
        // Не получается подключить inputValue из Searchbar, чтобы отображалось, то что написано в инпуте
        // .filter((card) => {
        //   const allCard = card.descr + card.additional;
        //   return allCard.toLowerCase().indexOf({inputValue}) !== -1;
        // })
        .map((card, index) => {
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
