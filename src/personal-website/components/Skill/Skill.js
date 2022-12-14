import React from "react";
import { Grid, Box, Typography } from "@mui/material";
function Skill(props) {
  return (
    <Box data-testid={`Skill${props.index}`}>
      <Grid container style={{ justifyContent: "center" }}>
        <Grid item xs={4}></Grid>
        <Grid item xs={1} style={{ fontSize: "38px" }}>
          <props.icon />
        </Grid>

        <Grid item xs={4}>
          <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>
            {props.skillName}
          </Typography>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Box>
  );
}

export default Skill;
