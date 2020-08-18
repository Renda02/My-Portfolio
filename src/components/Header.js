import React from "react";
import { Typography, Grid, Avatar, Box } from "@material-ui/core";
import avatar from "../images/coding.png";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";

//CSS STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    fontSize: "3rem",
    fontFamily: "arial, sans-serif-light, sans-serif;",
    fontWeight: "400",
    color: "white",
    textAlign: "center",
  },
  subtitle: {
    color: "white",
    marginBottom: "1rem",
  },
  cointaner: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100%vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.cointaner}>
      <Grid container justify="center">
        {" "}
        <Avatar
          className={classes.avatar}
          src={avatar}
          alt="Rendani Luvhengo"
          width="50"
        />
      </Grid>

      <Typography className={classes.title} variant="h5">
        <Typed strings={["Rendani Sandra"]} typeSpeed={30} showCursor={false} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["Front End Developer"]}
          typeSpeed={30}
          showCursor={false}
        />
      </Typography>
    </Box>
  );
}

export default Header;
