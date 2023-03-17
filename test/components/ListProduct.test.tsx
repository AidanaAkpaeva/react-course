import { render, screen } from "@testing-library/react";
import React from "react";
import ListProduct from "../../src/components/listProducts/ListProducts";
import { cardList } from "../../src/helpers/CardList";

describe("ListProduct", () => {
  test("test render ListProduct", () => {
    render(<ListProduct />);
  });
});
