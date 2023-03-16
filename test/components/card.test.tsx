import { render, screen } from "@testing-library/react";
import { string } from "prop-types";
import React from "react";
import Card from "../../src/components/card/Card";

describe("Card", () => {
  test("test button reset", () => {
    render(<Card image={""} descr={""} price={""} additional={""} />);
    expect(screen.queryByRole("listitem")).toBeInTheDocument();
  });
});
