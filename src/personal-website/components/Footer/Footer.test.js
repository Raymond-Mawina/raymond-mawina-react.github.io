import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer.js";
import { infoAboutMe } from "../../utilities/utilities";

describe("Footer", () => {
  it("should be rendered without errors", () => {
    render(<Footer footer={infoAboutMe.footer} />);
    const footerComponent = screen.getByTestId("Footer");
    expect(footerComponent).toBeInTheDocument();
  });

  it("should to render component with text 'Created by Raymond Mawina in 2022'", () => {
    render(<Footer footer={infoAboutMe.footer} />);
    const footerComponent = screen.getByText(infoAboutMe.footer);
    expect(footerComponent).toBeInTheDocument();
  });
});
