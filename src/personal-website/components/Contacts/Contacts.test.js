import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Contacts from "./Contacts.js";
import { contactList } from "../../utilities/utilities";

describe("Contacts", () => {
  it("should be rendered without errors", () => {
    render(<Contacts contactsInfo={contactList} />);
    const contactsComponent = screen.getByTestId("Contacts");
    expect(contactsComponent).toBeInTheDocument();
  });

  it("should render 1 typography with text 'Contacts'", () => {
    render(<Contacts contactsInfo={contactList} />);
    const contactsComponent = screen.getByTestId("Contacts");
    expect(contactsComponent).toHaveTextContent("Contacts");
  });

  it("should call window.open once, when 'Checkout My Github Profile' Button is clicked", () => {
    const githubLink = spyOn(window, "open");
    render(<Contacts contactsInfo={contactList} />);
    fireEvent.click(screen.getByTestId("github"));
    expect(githubLink).toHaveBeenCalledTimes(1);
    expect(githubLink).toHaveBeenCalledWith(contactList.links[0].link);
  });

  it("should call window.open once, when 'Checkout My LinkedIn Profile' Button is clicked", () => {
    const linkedInLink = spyOn(window, "open");
    render(<Contacts contactsInfo={contactList} />);
    fireEvent.click(screen.getByTestId("linkedIn"));
    expect(linkedInLink).toHaveBeenCalledTimes(1);
    expect(linkedInLink).toHaveBeenCalledWith(contactList.links[1].link);
  });
});
