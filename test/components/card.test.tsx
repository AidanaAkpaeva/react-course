import { render, screen } from "@testing-library/react";
import React from "react";
import Card from "../../src/components/card/Card";


describe("Card", () => {
  test("test render Card", () => {
    render(<Card image={""} descr={""} price={""} additional={""} />);
    expect(screen.queryByRole("listitem")).toBeInTheDocument();
  });
});
