import React from "react";
import { makeStyles } from "@material-ui/styles";
import { ExternalLink } from "react-external-link";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <ExternalLink href="https://www.linkedin.com/in/rendani-luvhengo/">
        <BottomNavigationAction
          className={classes.root}
          style={{ paddingTop: "15px" }}
          icon={<LinkedIn />}
        />
      </ExternalLink>
      <ExternalLink href="https://github.com/Renda02">
        <BottomNavigationAction
          className={classes.root}
          style={{ paddingTop: "15px" }}
          icon={<GitHub />}
        />
      </ExternalLink>
    </BottomNavigation>
  );
}

export default Footer;
