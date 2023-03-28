import { Component } from "react";
import { CardListProps, CardListState } from "./interface";
import "./style.scss";

import FormCardItem from "../../components/FormCardItem/FormCardItem";

class FormCardList extends Component<CardListProps, CardListState> {
  constructor(props: CardListProps) {
    super(props);
  }

  render() {
    return (
      <ul className="container formCardList">
        {this.props.formItems.map(
          (
            {
              firstName,
              lastName,
              email,
              phone,
              country,
              city,
              streetAddress,
            },
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
  }
}

export default FormCardList;
