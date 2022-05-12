import React from "react";
import Intro from "./components/intro/intro";
import Project from "./components/project/project";
import Skills from "./components/skills/skills";
import { createUseStyles } from "react-jss";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Topbar from "./components/topbar/topbar";
const useStyles = createUseStyles({
  App: {
    height: "calc(100vh - 70px)",
    width: "100%",
    backgroundColor: "white",
  },
  //   sections: {
  //     width: "100%",
  //     height: "calc(100vh - 70px)",
  //     backgroundColor: "rgb(24, 235, 221)",
  //     position: "relative",
  //     top: "70px",
  //     // scrollbar-width: none; //for firefox
  //     scrollSnapType: "y mandatory",
  //     "&::-webkit-scrollbar ": {
  //       //chrome, safari, ms edge
  //       display: "none",
  //     },
  //   },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
