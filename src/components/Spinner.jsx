/* eslint-disable no-unused-vars */
import React from "react";
import "./css/Spinner.css"; // Import CSS file for spinner styles

const Spinner = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="spinner"></div>
        <div className="text-center mt-4">
          <p className="text-lg">Please wait . . .</p>
        </div>
      </div>
    </>
  );
};

export default Spinner;
