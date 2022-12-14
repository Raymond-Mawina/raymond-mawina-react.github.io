import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About.js";
import { infoAboutMe } from "../../utilities/utilities";

describe("About", () => {
  it("should be rendered without errors", () => {
    render(<About myInfo={infoAboutMe} />);
    const aboutComponent = screen.getByTestId("About");
    expect(aboutComponent).toBeInTheDocument();
  });

  it("should render 3 typography labelled aboutHeader, aboutSubHeader and aboutContent", () => {
    render(<About myInfo={infoAboutMe} />);
    const aboutComponent = screen.getByTestId("About");
    expect(aboutComponent).toHaveTextContent(infoAboutMe.header);
    expect(aboutComponent).toHaveTextContent(infoAboutMe.subHeader);
    expect(aboutComponent).toHaveTextContent(infoAboutMe.aboutContent);
  });
});
