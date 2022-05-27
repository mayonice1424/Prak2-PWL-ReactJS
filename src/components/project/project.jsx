import React from "react";
import { createUseStyles } from "react-jss";
import StarIcon from "@mui/icons-material/Star";
const useStyles = createUseStyles({
  container: {
    width: "100%",
    height: "100vh",
    position: "fixed",
    overflowY: "scroll",
  },
  intro: {
    marginTop: "10%",
    fontFamily: "Poppins",
    fontWeight: "initial",
    paddingLeft: "10%",
    potition: "fixed",
  },
  foto: {
    width: "21vw",
    height: "30vh",
    marginTop: "3%",
  },
  fotomobile: {
    width: "8vw",
    height: "30vh",
    marginTop: "3%",
  },
  layout: {
    paddingTop: "10%",
    width: "100%",
    position: "absolute",
    justifyContent: "center",
  },
  star: {
    color: "red",
    fontWeight: "bold",
    marginTop: "20px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  cardBox: {
    border: "1px solid black",
    borderRadius: "10px",
    margin: "10%",
    padding: "10px",
    position: "fixed",
    width: "18%",
    height: "25%",
    alignItems: "center",
  },
  title: {
    paddingTop: "0%",
    justifyContent: "center",
    display: "flex",
    width: "100%",
    position: "absolute",
  },
  Container: {
    marginTop: "10%",
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    position: "absolute",
  },
  Container2: {
    marginTop: "35%",
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    position: "absolute",
  },
  Container3: {
    marginTop: "60%",
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    position: "absolute",
  },
  card: {
    backgroundColor: "#EDF3F9",
    width: "23vw",
    height: "44vh",
    border: "1px solid black",
    borderRadius: "10px",
    textAlign: "center",
  },
  cardImage: {
    borderBottom: "1px solid black",
    borderRadius: "10px",
    width: "100%",
    height: "34vh",
    boxSizing: "border-box",
    backgroundColor: "white",
    alignItems: "center",
  },
  a: {
    textDecoration: "none",
  },
  text: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: "1rem",
    color: "black",
  },
});
export default function Project() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.layout}>
        <div className={classes.title}>
          <StarIcon className={classes.star} />
          <h3>My Portofolio Project</h3>
          <StarIcon className={classes.star} />
        </div>
        <section className={classes.Container}>
          <a
            href="https://github.com/gremlinflat/Defense-of-the-Ila.git"
            className={classes.a}
          >
            <div className={classes.card}>
              <div className={classes.cardImage}>
                <img
                  src={`${process.env.PUBLIC_URL}/Defenseofila.jpeg`}
                  alt="foto"
                  className={classes.foto}
                />
              </div>
              <h2 className={classes.text}>Defense of ila</h2>
            </div>
          </a>
          <a
            href="https://github.com/mbagas/skck-copy.git"
            className={classes.a}
          >
            <div className={classes.card}>
              <div className={classes.cardImage}>
                <img
                  src={`${process.env.PUBLIC_URL}/SistemInformasipelanggaran.jpg`}
                  alt="foto"
                  className={classes.foto}
                />
              </div>
              <h2 className={classes.text}>
                Sistem Informasi Pelanggaran SMA Negeri 1 Bukittinggi
              </h2>
            </div>
          </a>
          <a
            href="https://github.com/mayonice1424/UTS-PAM.git"
            className={classes.a}
          >
            <div className={classes.card}>
              <div className={classes.cardImage}>
                <img
                  src={`${process.env.PUBLIC_URL}/ship-shipan.png`}
                  alt="foto"
                  className={classes.fotomobile}
                />
              </div>
              <h2 className={classes.text}>Aplikasi Ship-shipan</h2>
            </div>
          </a>
        </section>
        <section className={classes.Container2}>
          <a
            href="https://github.com/laras310/IF3028-TUBESPEMWEB-RA-RC-2021.git"
            className={classes.a}
          >
            <div className={classes.card}>
              <div className={classes.cardImage}>
                <img
                  src={`${process.env.PUBLIC_URL}/simplelapor.jpeg`}
                  alt="foto"
                  className={classes.foto}
                />
              </div>
              <h2 className={classes.text}>Simple Lapor</h2>
            </div>
          </a>
          <a
            href="https://github.com/mayonice1424/Prak1-PWL-Jquery.git"
            className={classes.a}
          >
            <div className={classes.card}>
              <div className={classes.cardImage}>
                <img
                  src={`${process.env.PUBLIC_URL}/Pemesanan Produk.png`}
                  alt="foto"
                  className={classes.foto}
                />
              </div>
              <h2 className={classes.text}>Pemesanan Produk</h2>
            </div>
          </a>
          <a
            href="https://www.figma.com/file/Okw7NHWHDMqKU0fcAhr5W5/Untitled?node-id=10%3A459"
            className={classes.a}
          >
            <div className={classes.card}>
              <div className={classes.cardImage}>
                <img
                  src={`${process.env.PUBLIC_URL}/Aplikasi Bank Sampah.png`}
                  alt="foto"
                  className={classes.fotomobile}
                />
              </div>
              <h2 className={classes.text}>Design UI Aplikasi Bank Sampah</h2>
            </div>
          </a>
        </section>
        <section className={classes.Container3}>
          <a
            href="https://github.com/Ihza-Fajrur/Sistem-Informasi-Nilaraya.git"
            className={classes.a}
          >
            <div className={classes.card}>
              <div className={classes.cardImage}>
                <img
                  src={`${process.env.PUBLIC_URL}/Sistem Informasi Klinik Nilaraya.jpg`}
                  alt="foto"
                  className={classes.foto}
                />
              </div>
              <h2 className={classes.text}>Sistem Informasi Klinik Nilaraya</h2>
            </div>
          </a>
          <a
            href="https://www.figma.com/file/RbQ21jDAq4pzS0nbRVxVQj/Duplikat-Lomba?node-id=0%3A1"
            className={classes.a}
          >
            <div className={classes.card}>
              <div className={classes.cardImage}>
                <img
                  src={`${process.env.PUBLIC_URL}/LOGIN.png`}
                  alt="foto"
                  className={classes.fotomobile}
                />
              </div>
              <h2 className={classes.text}>
                Design UI/UX Aplikasi Sikatportal
              </h2>
            </div>
          </a>
          <a
            href="https://www.figma.com/file/UHPltSp2vjXhkeD3wuldCi/Untitled?node-id=2%3A3502"
            className={classes.a}
          >
            <div className={classes.card}>
              <div className={classes.cardImage}>
                <img
                  src={`${process.env.PUBLIC_URL}/Digimon.png`}
                  alt="foto"
                  className={classes.fotomobile}
                />
              </div>
              <h2 className={classes.text}>
                Design UI Aplikasi Digital Monitoring
              </h2>
            </div>
          </a>
        </section>
      </div>
    </div>
  );
}
