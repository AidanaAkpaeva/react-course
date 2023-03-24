import React from "react";
import "./style.scss";
import { InputProps, InputState, InputChangeInterface } from "./interface";

class Searchbar extends React.Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange = (event: InputChangeInterface): void => {
    const value = event.target.value;
    const name = event.target.name;
    const newState = { [name]: value } as Pick<InputState, keyof InputProps>;

    localStorage.setItem("inputValue", value);
    this.setState(newState);
  };

  componentDidMount() {
    const inputValue = localStorage.getItem("inputValue");
    this.setState({ inputValue });
  }

  handleReset = (event: any): void => {
    const value = event.target.value;

    localStorage.setItem("inputValue", value);

    const inputValue = localStorage.getItem("inputValue");
    this.setState({ inputValue });
  };

  render() {
    return (
      <div className="search">
        <input
          className="input-home"
          type="text"
          placeholder="Search..."
          name="inputValue"
          onChange={this.handleChange}
          value={this.state.inputValue || ""}
        />
        <button className="btn-reset" onClick={this.handleReset}></button>
      </div>
    );
  }
}

export default Searchbar;
