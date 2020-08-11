import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0.3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
        "&:nth-of-type(2n):before": {
          display: "none",
        },
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase",
  },
}));

function Resume() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          About Me
        </Typography>
        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
          Driven by continuous improvement, I am focused on meeting all
          deliverables while maintaining reliability. I thrive well in
          progressive an organization that encourages continuous improvement and
          I am currently seeking for new opportunity as Front End Developer in a
          organization where I can fit in my skills.
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h5"
            align="center"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Skills
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              HTML,CSS & Javascript
              <br />
              Reactjs
              <br />
              Bootstrap
              <br />
              Material ui
              <br /> Hosting (Netlify)
              <br />
              Git&GitHub
              <br />
              Live API
              <br />
              VsCode
            </Typography>
          </Box>
          <Typography
            variant="h5"
            align="center"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Education
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Front End Development
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              {" "}
              SheCodes Workshop,Lisbon [30 March 2020-27 July 2020]
            </Typography>

            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Btech: Quality{" "}
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              {" "}
              University of Johannerburg [January 2017-December 2017]
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            ></Typography>
          </Box>
          <Typography
            variant="h5"
            align="center"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Experience
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              South Africa Weather Service [02/2019 - 07/2019]
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Safety Health Environmental and Quality (SHEQ) Officer
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              {" "}
              Accomplish a successful SHEQ training across regional offices
              which improved the awareness of Quality management and improved
              reporting of nonconformance and service-related complaints.
              <br />
              Collaborated with IT department in training for Microsoft Teams
              across departments which improved communication and responds
              between departments and customers.
              <br />
              Control and approve organizational document changes in accordance
              to documented information ISO 9001:2015.
            </Typography>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Dekra Inspection [04/2016- 07/2018]
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              {" "}
              Quality Inspection (NDT) Technician
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "tomato" }}
            >
              Performed surface inspection using Magnetic Testing, Dye Penetrant
              Testing or Wall Thickness on welds to ensure that is conforming to
              client’s requirements and procedures.
              <br /> Accurately calibrate inspection equipment and compiled
              traceable documents as per specifications and quality
              specifications.
              <br />
              Compiled inspection reports to produce reliable and traceable
              records.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Resume;
