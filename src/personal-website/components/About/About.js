import React from "react";
import { Box, Typography } from "@mui/material";
import { Element } from "react-scroll";
function About(props) {
  return (
    <Box
      data-testid="About"
      align="center"
      sx={{ marginTop: "90px", marginBottom: "350px" }}
    >
      <Element name="About">
        <Typography fontWeight="bold" variant="h3" component="div">
          {props.myInfo.header}
        </Typography>
        <Typography variant="h4" component="div">
          {props.myInfo.subHeader}
        </Typography>
        <Typography fontWeight="bold" width="75%">
          {props.myInfo.aboutContent}
        </Typography>
      </Element>
    </Box>
  );
}

export default About;
