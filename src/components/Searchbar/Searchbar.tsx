import React, { useState, useEffect } from "react";
import { InputState, InputChangeInterface } from "./interface";
import "./style.scss";

const Searchbar: React.FC<InputState> = () => {
  const [inputValue, setInputValue] = useState(() => {
    return localStorage.getItem("inputValue") || "";
  });

  useEffect(() => {
    localStorage.setItem("inputValue", inputValue);
  }, [inputValue]);

  const handleChange = (event: InputChangeInterface): void => {
    setInputValue(event.target.value);
  };

  const handleReset = () => {
    setInputValue("");
  };

  return (
    <div className="search">
      <input
        className="input-home"
        type="text"
        placeholder="Search..."
        name="inputValue"
        onChange={handleChange}
        value={inputValue}
      />
      <button className="btn-reset" onClick={handleReset}></button>
    </div>
  );
};

export default Searchbar;
