import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App.js";

describe("App", () => {
  it("should be rendered without errors", () => {
    render(<App />);
    const appComponent = screen.getByTestId("App");
    expect(appComponent).toBeInTheDocument();
  });

  it("should render components Header, About, Projects, Skills, Contacts and Footer", () => {
    render(<App />);
    const headerComponent = screen.getByTestId("Header");
    const aboutComponent = screen.getByTestId("About");
    const projectsComponent = screen.getByTestId("Projects");
    const skillsComponent = screen.getByTestId("Skills");
    const contactsComponent = screen.getByTestId("Contacts");
    const footerComponent = screen.getByTestId("Footer");

    expect(headerComponent).toBeInTheDocument();
    expect(aboutComponent).toBeInTheDocument();
    expect(projectsComponent).toBeInTheDocument();
    expect(skillsComponent).toBeInTheDocument();
    expect(contactsComponent).toBeInTheDocument();
    expect(footerComponent).toBeInTheDocument();
  });
});
