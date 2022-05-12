import React from "react";
import Intro from "./components/intro/intro";
import Project from "./components/project/project";
import Skills from "./components/skills/skills";
import { createUseStyles } from "react-jss";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Topbar from "./components/topbar/topbar";
const useStyles = createUseStyles({
  ".app": {
    height: "100vh",
  },
  ".app .sections": {
    width: "100%",
    height: "calc(100vh - 70px)",
    backgroundColor: "#18ebdd",
    position: "relative",
    top: "70px",
    scrollBehavior: "smooth",
    scrollSnapType: "y mandatory",
  },
  ".app .sections::-webkit-scrollbar": {
    display: "none",
  },
  ".app .sections > *": {
    width: "100vw",
    height: "calc(100vh - 70px)",
    scrollSnapAlign: "start",
  },
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
