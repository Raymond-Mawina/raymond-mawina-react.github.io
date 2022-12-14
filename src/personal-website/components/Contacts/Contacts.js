import React from "react";
import { Box, Typography, Grid, Chip, Avatar } from "@mui/material";
import { Element } from "react-scroll";

function Contacts(props) {
  function hovered(e) {
    e.target.style.color = "red";
  }

  function unhovered(e) {
    e.target.style.color = "white";
  }

  return (
    <Box
      data-testid="Contacts"
      className="Contacts"
      sx={{ marginBottom: "200px" }}
    >
      <Element name="Contacts">
        <Typography fontWeight="bold" variant="h3" component="div">
          Contacts
        </Typography>
        <Grid container>
          {props.contactsInfo.contacts.map((contact) => (
            <Grid item xs={12} key={contact.id}>
              <Chip
                avatar={
                  <Avatar
                    style={{
                      background: "black",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    <contact.icon />
                  </Avatar>
                }
                label={contact.contact}
                style={{ color: "white" }}
              />
            </Grid>
          ))}

          {props.contactsInfo.emails.map((contact) => (
            <Grid item xs={12} key={contact.id}>
              <a
                href={`mailto: ${contact.contact}`}
                onMouseEnter={hovered}
                onMouseLeave={unhovered}
              >
                <Chip
                  avatar={
                    <Avatar
                      style={{
                        background: "black",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      <contact.icon />
                    </Avatar>
                  }
                  label={contact.contact}
                  style={{ color: "white" }}
                />
              </a>
            </Grid>
          ))}

          <Grid container>
            <Grid item xs={4}></Grid>
            {props.contactsInfo.links.map((link) => (
              <Grid item xs={1.33} key={link.id}>
                <link.icon
                  data-testid={link.id}
                  onMouseEnter={hovered}
                  onMouseLeave={unhovered}
                  style={{ fontSize: "50px", color: "white" }}
                  onClick={() => window.open(link.link)}
                />
              </Grid>
            ))}

            {props.contactsInfo.downloads.map((download) => (
              <Grid item xs={1.33} key={download.id}>
                <a
                  data-testid="resume"
                  href={`../pdf/${download.download}`}
                  download
                  onMouseEnter={hovered}
                  onMouseLeave={unhovered}
                >
                  <download.icon
                    style={{ fontSize: "50px", color: "white" }}
                  ></download.icon>
                </a>
              </Grid>
            ))}
            <Grid item xs={4}></Grid>
          </Grid>
        </Grid>
      </Element>
    </Box>
  );
}

export default Contacts;
