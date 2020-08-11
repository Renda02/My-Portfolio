import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";
import { ExternalLink } from "react-external-link";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <Box component="div" style={{ background: "#233", height: "100vh" }}>
      <Navbar />
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography
            variant="h5"
            style={{
              color: "tomato",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            Get In Touch
          </Typography>
          <br />
          <ExternalLink href="https://www.linkedin.com/in/rendani-luvhengo/">
            <Button
              className={classes.button}
              variant="outlined"
              fullWidth={true}
              endIcon={<SendIcon />}
            >
              Email
            </Button>
          </ExternalLink>
          <ExternalLink href="mailto:rluvhengo2@gmail.com">
            <Button
              className={classes.button}
              variant="outlined"
              fullWidth={true}
              endIcon={<SendIcon />}
            >
              {" "}
              LinkedIn
            </Button>{" "}
          </ExternalLink>
        </Box>{" "}
      </Grid>{" "}
    </Box>
  );
}

export default Contact;
