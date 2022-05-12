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
    marginTop: "-10%",
    textDecoration: "none",
    userSelect: "none",
    webkitUserSelect: "none",
    touchAction: "manipulation",
    whiteSpace: "nowrap",
    cursor: "pointer",
  },

  // .button-63:active,
  // .button-63:hover {
  //   outline: 0;
  // }

  // @media (min-width: 768px) {
  //   .button-63 {
  //     font-size: 24px;
  //     min-width: 196px;
  //   }
  // }
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
      <a
        className={classes.contact}
        role="button"
        href="https://bit.ly/linkWaIlham"
      >
        Contact
      </a>
    </div>
  );
}
