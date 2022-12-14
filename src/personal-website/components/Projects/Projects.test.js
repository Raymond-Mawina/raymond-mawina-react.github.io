import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "./Projects.js";
import { projectDetails } from "../../utilities/utilities.js";

describe("Projects", () => {
  it("should be rendered without errors", () => {
    render(<Projects projectsInfo={projectDetails} />);
    const projectsComponent = screen.getByTestId("Projects");
    expect(projectsComponent).toBeInTheDocument();
  });

  it("should render Typography with text 'Projects'", () => {
    render(<Projects projectsInfo={projectDetails} />);
    const projectsComponent = screen.getByTestId("Projects");
    expect(projectsComponent).toHaveTextContent("Projects");
  });

  it("should render atleast 2 Project components", () => {
    render(<Projects projectsInfo={projectDetails} />);
    const projectComponent0 = screen.getByTestId("Project0");
    const projectComponent1 = screen.getByTestId("Project1");
    expect(projectComponent0).toBeInTheDocument();
    expect(projectComponent1).toBeInTheDocument();
  });
});
