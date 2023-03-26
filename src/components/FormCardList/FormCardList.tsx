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
        {this.props.formItems.map((_, index) => (
          <FormCardItem
            key={index}
            firstName={this.props.form.inputTextFirstName}
            lastName={this.props.form.inputTextLastName}
            email={this.props.form.inputTextEmail}
            phone={this.props.form.inputTextPhone}
            country={this.props.form.selectorCountry}
            city={this.props.form.selectorCity}
            addressStreet={this.props.form.inputTextStreetAddress}
          />
        ))}
      </ul>
    );
  }
}

export default FormCardList;
