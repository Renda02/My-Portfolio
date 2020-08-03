import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
  },
  "&:before": {
    content: "''",
    position: "absolute",
    height: "100%",
    border: "1px solid tan",
    right: "40px",
    top: 0,
  },
  "&:after": {
    content: "''",
    display: "table",
    clear: "both",
  },
  [theme.breakpoints.up("md")]: {
    padding: "2rem",
    "&:before": {
      left: "calc(50% - 1px)",
      right: "auto",
    },
  },
}));

function Resume() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center">
          About Me
        </Typography>
      </Box>
      <Box component="div">
        <Typography
          variant="h5"
          align="center"
          className={classes.timeLine}
        ></Typography>
      </Box>
    </div>
  );
}

export default Resume;
