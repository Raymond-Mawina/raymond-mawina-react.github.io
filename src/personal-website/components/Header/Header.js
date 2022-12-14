import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  IconButton,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { listOfLinks } from "../../utilities/utilities.js";
import NavLink from "../NavLink/NavLink.js";

function Header(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobileView = useMediaQuery(useTheme().breakpoints.down("md"));

  return (
    <Box align="center" data-testid="Header">
      <AppBar position="fixed" style={{ background: "black" }}>
        <Toolbar>
          <Drawer
            PaperProps={{
              sx: {
                width: 240,
                color: "white",
                backgroundColor: "black",
                marginTop: "65px",
                marginLeft: "8px",
              },
              elevation: 8,
            }}
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            variant="persistent"
          >
            <List>
              {listOfLinks.map((link) => (
                <ListItem key={link}>
                  <NavLink setDrawerOpen={setDrawerOpen} link={link} />
                </ListItem>
              ))}
            </List>
          </Drawer>
          {isMobileView ? (
            <Grid container>
              <Grid item xs={8}>
                <Typography
                  alignContent="center"
                  alignItems="center"
                  sx={{ fontWeight: "bold", fontSize: 25 }}
                >
                  {props.name}
                </Typography>
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={1}>
                <IconButton onClick={() => setDrawerOpen(!drawerOpen)}>
                  <MenuIcon sx={{ color: "white" }}></MenuIcon>
                </IconButton>
              </Grid>
            </Grid>
          ) : (
            <Grid container>
              <Grid item xs={0.5}></Grid>
              <Grid item xs={3}>
                <Typography
                  alignContent="center"
                  alignItems="center"
                  sx={{ fontWeight: "bold", fontSize: 20 }}
                >
                  {props.name}
                </Typography>
              </Grid>
              <Grid item xs={0.5}></Grid>
              <Grid item xs={8}>
                {listOfLinks.map((link) => (
                  <NavLink
                    setDrawerOpen={setDrawerOpen}
                    key={link}
                    link={link}
                  />
                ))}
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
