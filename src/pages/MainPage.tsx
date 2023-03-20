import React from "react";
import ListProducts from "../components/listProducts/ListProducts";
import Searchbar from "../components/searchbar/Searchbar";
import "./style.scss";

class HomePage extends React.Component<{}, {}> {
  render() {
    return (
      <div className="container-home container">
        <Searchbar />
        <ListProducts />
      </div>
    );
  }
}

export default HomePage;
