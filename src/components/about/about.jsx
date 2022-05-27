import React from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  container: {
    width: "100%",
    backgroundColor: "white",
    height: "100vh",
  },
  intro: {
    marginTop: "3%",
    fontFamily: "Poppins",
    fontWeight: "8rem",
    paddingLeft: "1%",
    fontWeight: "300",
  },
  name: {
    marginTop: "3%",
    fontFamily: "Poppins",
    fontWeight: "8rem",
    paddingLeft: "1%",
    fontWeight: "700",
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
    marginLeft: "2.5%",
    width: "4rem",
    height: "4rem",
    borderRadius: "100%",
    marginTop: "2%",
  },
  layout: {
    paddingTop: "5%",
    display: "flex",
    width: "100vw",
  },
  h2: {
    display: "flex",
    width: "100vw",
    marginTop: "4%",
    marginLeft: "2%",
  },
  h3: {
    display: "flex",
    width: "100vw",
    marginLeft: "2%",
    fontWeight: "500",
  },
  Container: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    position: "absolute",
  },
  Container2: {
    marginTop: "15%",
    marginLeft: "2%",
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    position: "absolute",
    fontSize: "1.5rem",
  },
  Container4: {
    marginTop: "20%",
    marginLeft: "2%",
    width: "100%",
    position: "absolute",
  },
  flexContainer: {
    display: "inline-flex",
    justifyContent: "space-around",
    width: "100%",
  },
});
export default function Project() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.layout}>
        <section className={classes.Container}>
          <h2 className={classes.h2}>
            <img
              src={`${process.env.PUBLIC_URL}/waving-hand.gif`}
              alt="foto"
              className={classes.foto}
            />
            <span className={classes.intro}>
              Hello, my name is
              <span className={classes.name}>Ilham Nofri Yandra</span>
              &nbsp; nice to meet you!
            </span>
          </h2>
        </section>
        <div className={classes.flexContainer}>
          <section className={classes.Container2}>
            <h3 className={classes.h3}>Personal Data</h3>
          </section>
          <section className={classes.Container4}>
            <h3 className={classes.h3}>
              Job : Informatics Student at Institute Teknologi Sumatera
            </h3>
            <h3 className={classes.h3}>Age : 22 </h3>
            <h3 className={classes.h3}>Address : Lampung </h3>
            <h3 className={classes.h3}>Email : friyandrailham14@gmail.com </h3>
            <h3 className={classes.h3}>
              Github : https://github.com/mayonice1424
            </h3>
          </section>
        </div>
      </div>
    </div>
  );
}
