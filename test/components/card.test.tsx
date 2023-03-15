import { render, screen } from "@testing-library/react";
import { string } from "prop-types";
import React from "react";
import Card from "../../src/components/card/Card";

describe("Card", () => {
  test("test button reset", () => {
    render(
      <Card
        image={undefined}
        descr={undefined}
        price={undefined}
        additional={undefined}
      />
    );
    expect(screen.queryByRole("listitem")).toBeInTheDocument();
  });
});
