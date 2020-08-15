import React from "react";
import { Typography, Grid, Avatar, Box } from "@material-ui/core";
import avatar from "../images/img 2.jpg";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";

//CSS STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: { fontSize: "2rem", color: "#EE6145", textAlign: "center" },
  subtitle: {
    color: "tan",
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

      <Typography className={classes.subtitle} variant="h5">
        Hello, my name is {""}{" "}
        <Typed
          strings={["Rendani Sandra"]}
          typeSpeed={30}
          showCursor={false}
          className={classes.title}
        />
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
