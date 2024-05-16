/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Courses />
        <Feedback />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;