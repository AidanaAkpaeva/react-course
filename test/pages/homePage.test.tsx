import { render, screen } from "@testing-library/react";
import React from "react";
import HomePage from "./../../src/pages/HomePage";

describe("HomePage component testing", () => {
  test("HomePage", () => {
    render(<HomePage />);

    expect(screen.queryByRole("list")).toBeInTheDocument();
  });
});
