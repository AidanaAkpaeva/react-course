import React, { useState } from "react";
import { InputChangeInterface } from "./interface";
import "./style.scss";

const Searchbar: React.FC<InputChangeInterface> = ({
  onChange,
  onKeyPress,
  handleReset,
  value,
}) => {
  return (
    <div className="search">
      <input
        className="input-home"
        type="text"
        placeholder="Search..."
        onChange={onChange}
        onKeyDown={onKeyPress}
        value={value}
      />
      <button onClick={handleReset} className="btn-reset"></button>
    </div>
  );
};

export default Searchbar;
