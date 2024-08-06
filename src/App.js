import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
