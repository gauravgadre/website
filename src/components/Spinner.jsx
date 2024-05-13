/* eslint-disable no-unused-vars */
import React from "react";
import "./css/Spinner.css"; // Import CSS file for spinner styles

const Spinner = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className=" mb-4">please wait . . .</h1>
        <div className="spinner"></div>
      </div>
    </>
  );
};

export default Spinner;
