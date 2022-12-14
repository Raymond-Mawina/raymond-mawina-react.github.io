import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
  Grid,
  Box,
} from "@mui/material";
function Project(props) {
  return (
    <Box
      align="center"
      m="auto"
      marginTop="50px"
      data-testid={`Project${props.projectInfo.index}`}
    >
      <Grid item xs={11}>
        <Card>
          <CardMedia
            component="img"
            image={`images/${props.projectInfo.imageName}.png`}
            alt="Project screenshot"
          />
          <CardContent style={{ color: "white", background: "black" }}>
            <Typography variant="h6" component="div">
              {props.projectInfo.name}
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "white" }}
              color="text.secondary"
            >
              {props.projectInfo.description}
            </Typography>
          </CardContent>
          <CardActions
            style={{
              background: "black",
              justifyContent: "center",
            }}
          >
            <Button
              size="small"
              onClick={() => window.open(props.projectInfo.repoLink)}
            >
              Checkout the Repo
            </Button>
            <Button
              size="small"
              onClick={() => window.open(props.projectInfo.demoLink)}
            >
              Checkout Demo
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Box>
  );
}

export default Project;
