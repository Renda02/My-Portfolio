import React from "react";
import { ExternalLink } from "react-external-link";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from "@material-ui/core";
import Navbar from "./Navbar";
import project1 from "../images/html-css-js.jpg";
import project2 from "../images/react.png";
import project3 from "../images/react.png";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
});

function Portfolio() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Simple weather app created using HTML,CSS,Bootstrap and JS. I
                  use the Open Weather Map API to make calls to a restful api to
                  return the current weather data and geolocation data.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <ExternalLink href="https://github.com/Renda02/Vanilla-Weather-App">
                <Button size="small" color="primary">
                  Source Code{" "}
                </Button>
              </ExternalLink>
              <ExternalLink href="https://thirsty-albattani-e7ad76.netlify.app/">
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </ExternalLink>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Complete weather app created using a React application that's
                  going to fetch data from a Openweather API and return current
                  weather data and hourly weather data.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <ExternalLink href="https://github.com/Renda02/weather-react">
                <Button size="small" color="primary">
                  Source Code
                </Button>
              </ExternalLink>
              <ExternalLink href="https://heuristic-kilby-a7fe7c.netlify.app/">
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </ExternalLink>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 3"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 3
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  COVID-19 Tracker created React and Material UI thats going to
                  fetch from disease.sh - Open Disease Data fetch daily data.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <ExternalLink href="https://github.com/Renda02/COVID-Tracker">
                <Button size="small" color="primary">
                  Source Code
                </Button>
              </ExternalLink>

              <ExternalLink href="https://infallible-jackson-4be24d.netlify.app/">
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </ExternalLink>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Portfolio;
