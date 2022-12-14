import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header.js";

describe("Header", () => {
  it("should be rendered without errors", () => {
    render(<Header />);
    const headerComponent = screen.getByTestId("Header");
    expect(headerComponent).toBeInTheDocument();
  });
});
