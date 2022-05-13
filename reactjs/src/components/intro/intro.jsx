import React from "react";
import { createUseStyles } from "react-jss";
import "./intro.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const useStyles = createUseStyles({
  container: {
    width: "100%",
    position: "absolute",
  },
  intro: {
    marginTop: "10%",
    fontFamily: "Poppins",
    fontWeight: "initial",
    paddingLeft: "10%",
    potition: "fixed",
  },
  wannabe: {
    fontFamily: "Poppins",
    fontWeight: "initial",
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
    position: "fixed",
  },
  layout: {
    display: "flex",
  },
  contact: {
    position: "absolute",
    alignItems: "center",
    backgroundImage: "linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)",
    border: 0,
    borderRadius: "8px",
    boxShadow: "rgba(151, 65, 252, 0.2) 0 15px 30px -5px",
    boxSizing: "border-box",
    color: "#FFFFFF",
    display: "flex",
    fontFamily: "Phantomsans, sans-serif",
    fontSize: "20px",
    justifyContent: "center",
    lineHeight: "1em",
    maxWidth: "20%",
    minWidth: "140px",
    padding: "19px 24px",
    marginLeft: "10%",
    marginTop: "5%",
    textDecoration: "none",
    userSelect: "none",
    webkitUserSelect: "none",
    touchAction: "manipulation",
    whiteSpace: "nowrap",
    cursor: "pointer",
  },
  typewriter: {
    color: "red",
    fontWeight: "bold",
    marginLeft: "10px",
  },
});
export default function Intro() {
  const classes = useStyles();
  const { text } = useTypewriter({
    words: ["UI/UX Designer", "Front-End Developer"],
    loop: { 3: true },
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  return (
    <div className={classes.container}>
      <div className={classes.layout}>
        <div>
          <h1 className={classes.intro}>Hello, I'm Ilham </h1>
          <h3 className={classes.wannabe}>
            I am a<span className={classes.typewriter}>{text}</span>
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
      <div>
        <a
          className={classes.contact}
          role="button"
          href="https://bit.ly/linkWaIlham"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
