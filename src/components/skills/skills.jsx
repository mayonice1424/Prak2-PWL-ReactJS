import React from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  container: {
    width: "100%",
    backgroundColor: "white",
    height: "100vh",
    position: "fixed",
  },
  intro: {
    marginTop: "10%",
    fontFamily: "Poppins",
    fontWeight: "initial",
    paddingLeft: "10%",
    potition: "fixed",
  },
  foto: {
    width: "5rem",
    height: "4rem",
    position: "fixed",
    marginTop: "5%",
  },
  foto1: {
    width: "7.2srem",
    height: "4rem",
    position: "fixed",
    marginTop: "5%",
    marginLeft: "7%",
  },
  foto2: {
    width: "7.2srem",
    height: "4rem",
    position: "fixed",
    marginTop: "5%",
    marginLeft: "16%",
  },
  foto3: {
    width: "7.2srem",
    height: "4rem",
    position: "fixed",
    marginTop: "5%",
    marginLeft: "24%",
  },

  layout: {
    paddingTop: "12%",
    display: "flex",
    width: "100%",
    justifyContent: "left",
    marginLeft: "2%",
    fontSize: "1.5rem",
  },
});
export default function Project() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.layout}>
        Framework
        <img
          src={`${process.env.PUBLIC_URL}/sass.png`}
          className={classes.foto}
          alt="foto"
        />
        <img
          src={`${process.env.PUBLIC_URL}/React.png`}
          className={classes.foto1}
          alt="foto"
        />
        <img
          src={`${process.env.PUBLIC_URL}/bt.jpg`}
          className={classes.foto2}
          alt="foto"
        />
        <img
          src={`${process.env.PUBLIC_URL}/larapel.jpg`}
          className={classes.foto3}
          alt="foto"
        />
      </div>
      <div className={classes.layout}>
        Language
        <img
          src={`${process.env.PUBLIC_URL}/js.jpg`}
          className={classes.foto}
          alt="foto"
        />
        <img
          src={`${process.env.PUBLIC_URL}/c++.jpg`}
          className={classes.foto1}
          alt="foto"
        />
        <img
          src={`${process.env.PUBLIC_URL}/py.jpg`}
          className={classes.foto2}
          alt="foto"
        />
      </div>
    </div>
  );
}
