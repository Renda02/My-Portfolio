import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from "@material-ui/core";
import Navbar from "./Navbar";

function Portfolio() {
  return (
    <Box component="div">
      <Navbar />
      <Grid cointaner justify="center" alignItems="center">
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Project 1"
              height="140"
              image={project1}
            ></CardMedia>
          </CardActionArea>
        </Card>
      </Grid>
    </Box>
  );
}

export default Portfolio;
