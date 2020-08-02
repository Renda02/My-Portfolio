import React from "react";
import { Typography, Grid, Avatar, Box } from "@material-ui/core";
import avatar from "../images/coding.png";
import Typed from "react-typed";

function Header() {
  return (
    <Box>
      <Avatar src={avatar} alt="Rendani Luvhengo" />
      <Typography VARIANT="h4">
        <Typed strings={["Rendani Sandra"]} typeSpeed={40} />
      </Typography>
    </Box>
  );
}

export default Header;
