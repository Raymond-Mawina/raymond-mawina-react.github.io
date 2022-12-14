import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Project from "../Project/Project";
import { Element } from "react-scroll";
function Projects(props) {
  return (
    <Box
      data-testid="Projects"
      className="Projects"
      sx={{ marginTop: "290px" }}
    >
      <Element name="Projects">
        <Typography fontWeight="bold" variant="h3" component="div">
          Projects
        </Typography>
        <Grid container>
          {props.projectsInfo.projects.map((projectInfo) => (
            <Project key={projectInfo.index} projectInfo={projectInfo} />
          ))}
        </Grid>
      </Element>
    </Box>
  );
}

export default Projects;
