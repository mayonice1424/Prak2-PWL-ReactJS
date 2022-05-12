import React from "react";
import { createUseStyles } from "react-jss";
import "./intro.css";
const useStyles = createUseStyles({
  intro: {
    marginTop: "10%",
    fontFamily: "Poppins",
    paddingLeft: "10%",
    potition: "fixed",
  },
  wannabe: {
    fontFamily: "Poppins",
    paddingLeft: "10%",
    marginTop: "-20px",
    potition: "fixed",
  },
  caption: {
    marginLeft: "2.5%",
    fontFamily: "Poppins",
    fontWeight: "300",
    fontSize: "1rem",
    padding: "0px 60px",
  },
  foto: {
    width: "15rem",
    height: "15rem",
    padding: "4rem",
    borderRadius: "100%",
    potition: "fixed",
  },
  layout: {
    display: "flex",
  },
  contact: {
    potition: "fixed",
    marginTop: "-8rem",
    marginLeft: "10rem",
    position: "fixed",
    display: "inline-block",
    padding: "2% 8%",
    color: "white",
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: "1rem",
    letterSpacing: "0.1rem",
    borderRadius: "40px",
    background: "linear-gradient( 90deg, #0162c8, #55e7fc)",
  },
});
export default function Intro() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.layout}>
        <div>
          <h1 className={classes.intro}>Hello, I'm Ilham </h1>
          <h3 className={classes.wannabe}>
            Front-End Developer and UI/UX Designer
          </h3>
          <p className={classes.caption}>
            Mid level experience in web design and development knowledge. I'm
            lifetime learner.
          </p>
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/foto.jpg`}
            className={classes.foto}
            alt="foto"
          />
        </div>
      </div>
      <a className={classes.contact} href="https://bit.ly/linkWaIlham">
        Contact
      </a>
    </div>
  );
}
