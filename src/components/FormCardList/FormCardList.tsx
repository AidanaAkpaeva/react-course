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
            firstName={this.props.formItems[index].inputTextFirstName}
            lastName={this.props.formItems[index].inputTextLastName}
            email={this.props.formItems[index].inputTextEmail}
            phone={this.props.formItems[index].inputTextPhone}
            country={this.props.formItems[index].selectorCountry}
            city={this.props.formItems[index].selectorCity}
            addressStreet={this.props.formItems[index].inputTextStreetAddress}
          />
          
        ))}
      </ul>
    );
  }
}

export default FormCardList;
