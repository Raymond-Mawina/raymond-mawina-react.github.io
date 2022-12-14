import React from "react";
import { Box, Typography } from "@mui/material";
function Footer(props) {
  return (
    <Box align="center" data-testid="Footer">
      <Typography
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          padding: "15px",
        }}
      >
        {props.footer}
      </Typography>
    </Box>
  );
}

export default Footer;
