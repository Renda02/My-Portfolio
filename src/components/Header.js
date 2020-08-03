import React from "react";
import { Typography, Grid, Avatar, Box } from "@material-ui/core";
import avatar from "../images/img.jpg";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core";

//CSS STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: { fontSize: "2rem", color: "tomato", textAlign: "center" },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
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
        />
      </Grid>

      <Typography className={classes.title} VARIANT="h3">
        <Typed strings={["Rendani Sandra"]} typeSpeed={30} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} VARIANT="h5">
        <Typed strings={["Front End Developer"]} typeSpeed={30} />
      </Typography>
    </Box>
  );
}

export default Header;
