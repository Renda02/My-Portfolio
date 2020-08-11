import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  makeStyles,
  ListItemIcon,
} from "@material-ui/core";
import { AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import avatar from "../images/coding.png";
import Footer from "./Footer";

//CSS Styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "./portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
    listPath: "/contacts",
  },
];

function Navbar() {
  const [state, setState] = useState({ left: false });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar
        className={classes.avatar}
        src={avatar}
        alt="Rendani Sandra Luvhengo"
      />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar
          position="static"
          style={{ background: "#222" }}
          className="bar"
        >
          <Toolbar>
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
            <IconButton onClick={toggleSlider("left", true)}>
              <MenuIcon style={{ color: "tomato" }} className="arrow" />
            </IconButton>

            <MobilRightMenuSlider
              anchor="left"
              open={state.left}
              onClose={toggleSlider("left", false)}
            >
              {sideList("left")}
              <Footer />
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
