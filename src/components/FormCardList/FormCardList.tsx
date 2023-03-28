import { CardListProps } from "./interface";
import "./style.scss";

import FormCardItem from "../../components/FormCardItem/FormCardItem";

const FormCardList: React.FC<CardListProps> = ({ formItems }) => {
  return (
    <ul className="container formCardList">
      {formItems.map(
        (
          { firstName, lastName, email, phone, country, city, streetAddress },
          index
        ) => (
          <FormCardItem
            key={index}
            firstName={firstName}
            lastName={lastName}
            email={email}
            phone={phone}
            country={country}
            city={city}
            addressStreet={streetAddress}
          />
        )
      )}
    </ul>
  );
};

export default FormCardList;
