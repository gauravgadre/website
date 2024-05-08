/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Registrastion from "./components/Registrastion";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback"
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Courses />
        <Registrastion />
        <Contact />
        <Feedback/>
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;