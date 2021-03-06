import React from "react";
import Intro from "./components/intro/intro";
import Project from "./components/project/project";
import Skills from "./components/skills/skills";
import About from "./components/about/about";
import { createUseStyles } from "react-jss";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Topbar from "./components/topbar/topbar";
const useStyles = createUseStyles({
  ".app": {
    width: "100vw",
    top: "70px",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Router>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
