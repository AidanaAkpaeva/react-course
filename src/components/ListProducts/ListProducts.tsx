import Card from "../Card/Card";

import { ListProps } from "./ interface";
import "./style.scss";

const ListProducts: React.FC<ListProps> = ({ data, inputValue, press }) => {
  return (
    <>
      {!data || data.length === 0 ? (
        <h3 className="notFound">No data, sorry</h3>
      ) : (
        <ul className="products">
          {data?.map(({ id, name, image }) => {
            if (
              inputValue !== "" &&
              press === true &&
              name.toLowerCase().includes(inputValue.toLowerCase())
            ) {
              return <Card key={id} id={id} name={name} image={image} />;
            }
          })}
        </ul>
      )}
    </>
  );
};

export default ListProducts;
