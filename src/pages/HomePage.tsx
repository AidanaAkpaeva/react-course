import React from "react";
import ListProducts from "../components/listProducts/ListProducts";
import Searchbar from "../components/searchbar/Searchbar";
import "./style.css";

interface InputState {
  inputValue: string;
}

interface InputProps {}

class HomePage extends React.Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  handleChange = (event) => {
    const input = event.target;
    const value = input.value;

    localStorage.setItem("inputValue", value);
    this.setState({ [input.name]: value });
  };

  componentDidMount(): void {
    const inputValue = localStorage.getItem("inputValue");
    this.setState({ inputValue });
  }

  handleReset = (event) => {
    const input = event.target;
    const value = input.value;

    localStorage.setItem("inputValue", value);

    const inputValue = localStorage.getItem("inputValue");
    this.setState({ inputValue });
  };

  render() {
    return (
      <div className="container-home container">
        <Searchbar
          onChange={this.handleChange}
          value={this.state.inputValue}
          onClick={this.handleReset}
        />

        <ListProducts />
      </div>
    );
  }
}

export default HomePage;
