/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

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
      <Toaster />
    </>
  );
}

export default App;