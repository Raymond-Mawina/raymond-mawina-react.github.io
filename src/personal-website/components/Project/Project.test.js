import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Project from "./Project.js";

const testObject = {
  index: 0,
  name: "Memory Game",
  description: "This is a card clicking guessing game",
  imageName: "memory",
  repoLink: "https://github.com/Raymond-Mawina/GUI-MEMORY-GAME.github.io",
  demoLink: "https://raymond-mawina.github.io/GUI-MEMORY-GAME.github.io/",
};

describe("Project", () => {
  it("should be rendered without errors", () => {
    render(<Project projectInfo={testObject} />);
    const projectComponent0 = screen.getByTestId("Project0");
    expect(projectComponent0).toBeInTheDocument();
  });

  it("should render texts name, and description ", () => {
    render(<Project projectInfo={testObject} />);
    const projectComponent0 = screen.getByTestId("Project0");
    expect(projectComponent0).toHaveTextContent(testObject.name);
    expect(projectComponent0).toHaveTextContent(testObject.description);
  });

  it("should call window.open once, when 'Checkout the Repo' Button is clicked", () => {
    const repoLink = spyOn(window, "open");
    render(<Project projectInfo={testObject} />);
    fireEvent.click(screen.getByText("Checkout the Repo"));
    expect(repoLink).toHaveBeenCalledTimes(1);
    expect(repoLink).toHaveBeenCalledWith(testObject.repoLink);
  });

  it("should call window.open once, when 'Checkout Demo' Button is clicked", () => {
    const demoLink = spyOn(window, "open");
    render(<Project projectInfo={testObject} />);
    fireEvent.click(screen.getByText("Checkout Demo"));
    expect(demoLink).toHaveBeenCalledTimes(1);
    expect(demoLink).toHaveBeenCalledWith(testObject.demoLink);
  });
});
