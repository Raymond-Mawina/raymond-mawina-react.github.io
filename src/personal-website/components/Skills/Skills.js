import React from "react";
import { Typography, Box } from "@mui/material";
import Skill from "../Skill/Skill";
import { Element } from "react-scroll";

function Skills(props) {
  return (
    <Box
      data-testid="Skills"
      className="Skills"
      sx={{ marginTop: "90px", marginBottom: "305px" }}
    >
      <Element name="Skills">
        <Typography
          variant="h3"
          fontWeight="bold"
          component="div"
          style={{ marginBottom: "20px" }}
        >
          Skills
        </Typography>
        {props.skillsInfo.map((skill) => (
          <Skill
            index={skill.index}
            key={skill.index}
            icon={skill.icon}
            skillName={skill.name}
          />
        ))}
      </Element>
    </Box>
  );
}

export default Skills;
