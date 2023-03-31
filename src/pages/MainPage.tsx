import React from "react";
import ListProducts from "../components/ListProducts/ListProducts";
import Searchbar from "../components/Searchbar/Searchbar";
import "./style.scss";

const HomePage = () => {
  return (
    <div className="container-home container">
      <Searchbar inputValue={""} />
      <ListProducts />
    </div>
  );
};

export default HomePage;
