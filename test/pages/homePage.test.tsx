import { render, screen } from "@testing-library/react";
import React from "react";
import MainPage from "./../../src/pages/MainPage";

describe("MainPage component testing", () => {
  test("MainPage", () => {
    render(<MainPage />);

    expect(screen.queryByRole("list")).toBeInTheDocument();
  });
});
