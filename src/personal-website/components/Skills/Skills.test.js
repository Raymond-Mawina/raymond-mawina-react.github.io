import React from "react";
import { render, screen } from "@testing-library/react";
import Skills from "./Skills";
import { skillsDetails } from "../../utilities/utilities.js";

describe("Skills", () => {
  it("should be rendered without errors", () => {
    render(<Skills skillsInfo={skillsDetails} />);
    const projectsComponent = screen.getByTestId("Skills");
    expect(projectsComponent).toBeInTheDocument();
  });

  it("should render Typography with text 'Skills'", () => {
    render(<Skills skillsInfo={skillsDetails} />);
    const skillsComponent = screen.getByTestId("Skills");
    expect(skillsComponent).toHaveTextContent("Skills");
  });

  it("should render Skill components", () => {
    render(<Skills skillsInfo={skillsDetails} />);
    const skillComponent0 = screen.getByTestId("Skill0");
    expect(skillComponent0).toBeInTheDocument();
  });
});
