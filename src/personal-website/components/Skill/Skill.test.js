import React from "react";
import { render, screen } from "@testing-library/react";
import Skill from "./Skill.js";
import { skillsDetails } from "../../utilities/utilities.js";
describe("Skill", () => {
  it("should be rendered without errors", () => {
    render(
      <Skill
        index={skillsDetails[0].index}
        skillName={skillsDetails[0].name}
        icon={skillsDetails[0].icon}
      />
    );
    const skillComponent0 = screen.getByTestId("Skill0");
    expect(skillComponent0).toBeInTheDocument();
  });
});
