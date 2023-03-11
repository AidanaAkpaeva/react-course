import * as React from 'react';
import Card from './../components/card/Card';
import { cardList } from './../helpers/CardList';
import './style.css';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleChange = (event) => {
    const input = event.target;
    const value = input.value;

    localStorage.setItem('inputValue', value);
    this.setState({ [input.name]: value });
  }

  componentDidMount() {
    const inputValue = localStorage.getItem('inputValue');
    this.setState({ inputValue });
  }

  handleReset = (event) => {
    const input = event.target;
    const value = input.value;

    localStorage.setItem('inputValue', value);

    const inputValue = localStorage.getItem('inputValue');
    this.setState({ inputValue })
  }

  render() {
    const filtredCardList = cardList.filter(
      (card) => {
        const allCard = card.descr + card.additional + card.price;
        return allCard.toLowerCase().indexOf(this.state.inputValue) !== -1;
      }
    );
    return (
      <div className="container-home container">
        <div className="search">
          <input
            className="input-home"
            type="text"
            placeholder="Search..."
            name="inputValue"
            onChange={this.handleChange}
            value={this.state.inputValue || ''}
             />
          <button
            className='btn-reset'
            onClick={this.handleReset}
          ></button>
        </div>
        
        <ul className="products">
        
          {filtredCardList.map((card, index) => {
            return <Card
              key={index}
              descr={card.descr}
              img={card.img}
              price={card.price}
              additional={card.additional} />
          })}
        </ul >
      </div>
    );
  }
}

export default HomePage;