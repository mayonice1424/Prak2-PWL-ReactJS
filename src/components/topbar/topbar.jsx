import React from "react";
import { createUseStyles } from "react-jss";
import "../intro/intro.css";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  topbar: {
    width: "100%",
    height: 70,
    backgroundColor: "#202020",
    color: "white",
    padding: "10px 0px",
    scrollSnapType: "y mandatory",
    top: 0,
    zIndex: 2,
    marginTop: "0px",
    position: "fixed",
  },
  ".topbar .wrapper": {
    padding: "10px 30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ".topbar .wrapper .left .logo": {
    fontSize: "40px",
    fontWeight: "700",
    textDecoration: "none",
    color: "white",
    cursor: "pointer",
  },
  ".topbar .wrapper .left .logo:hover": {
    color: "#ffff",
  },
  nav_link: {
    display: "inline-block",
    paddingLeft: "20px",
    paddingRight: "20px",
    listStyle: "none",
    fontSize: "20px",
    textDecoration: "none",
    flexDirection: "row",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      color: "white",
    },
  },
  a: {
    fontSize: "16px",
    fontFamily: "roboto",
    paddingRight: 20,
    textDecoration: "none",
    color: "white",
    cursor: "pointer",
    "&:hover": {
      color: "white",
    },
    "&.selected, &.active": {
      border: "1px solid red",
    },
  },
  logo: {
    marginTop: "10px",
    fontWeight: "bold",
    fontSize: "16px",
    fontFamily: "poppins",
    paddingRight: 20,
    textDecoration: "none",
    color: "white",
    cursor: "pointer",
    "&:hover": {
      color: "#606273",
    },
    "&.selected, &.active": {
      border: "1px solid red",
    },
  },
  right: {
    marginRight: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default function Topbar() {
  const classes = useStyles();
  return (
    <div className={classes.topbar} id="topbar">
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <ul className={classes.nav_link}>
            <li className={classes.nav_link}>
              <Link className={classes.logo} to="/">
                <p className={classes.text}>Portofolio&nbsp;</p>
              </Link>
            </li>
            <li className={classes.nav_link}>
              <Link className={classes.a} to="/project">
                <p>Project&nbsp;</p>
              </Link>
            </li>
            <li className={classes.nav_link}>
              <Link className={classes.a} to="/about">
                <p>About&nbsp;</p>
              </Link>
            </li>
            <li className={classes.nav_link}>
              <Link className={classes.a} to="/skills">
                <p>Skills&nbsp;</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
