import React from "react";
import { createUseStyles } from "react-jss";
import "../intro/intro.css";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  topbar: {
    width: "100%",
    height: 70,
    backgroundColor: "white",
    color: "#000",
    padding: "10px 0px",
    scrollSnapType: "y mandatory",
  },
  wrapper: {
    fontFamily: "Poppins",
    height: 70,
    color: "black",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    display: "flex",
    position: "relative",
  },
  nav_link: {
    display: "inline-block",
    padding: "0px 20px",
    listStyle: "none",
    fontSize: "20px",
    textDecoration: "none",
    flexDirection: "row",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      color: "#606273",
    },
  },
  a: {
    fontSize: "16px",
    fontFamily: "roboto",
    paddingRight: 20,
    textDecoration: "none",
    color: "black",
    cursor: "pointer",
    "&:hover": {
      color: "#606273",
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
    color: "black",
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

export default function () {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.topbar} id="topbar">
        <div className={classes.wrapper}>
          <div className={classes.left}>
            <nav>
              <ul className={classes.nav_link}>
                <li className={classes.nav_link}>
                  <Link className={classes.logo} to="/">
                    <p>Portofolio&nbsp;</p>
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
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
