import React from "react";
import { render, screen } from "@testing-library/react";
import NavLink from "./NavLink.js";

describe("NavLink", () => {
  it("should be rendered without errors", () => {
    render(<NavLink link="Products" />);
    const navLinkComponent = screen.getByTestId("NavLink");
    expect(navLinkComponent).toBeInTheDocument();
  });
});
