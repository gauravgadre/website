/* eslint-disable no-unused-vars */
import React from "react";

function Home() {
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <h1 className="text-3xl font-semibold mb-4 pt-5">Contact</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-1">
            <span className="text-xl">Contact person</span>
            <br />
            <p className="text-sm md:text-md text-justify">
              For any query , you can reach out to contact person through mail or phone number.
            </p>
            <br />
          </div>
          <div className="md:w-1/2 mt-12 md:ml-24 md:mt-24 order-2">
            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
              {/* Left column */}
              <div className="flex flex-col items-center md:items-start space-y-2">
                <h1 className="text-center md:text-left">Mobile No.</h1>
                <div className="text-center md:text-left">+91-123456789</div>
              </div>
              {/* Right column */}
              <div className="flex flex-col items-center md:items-end space-y-2">
                <h1 className="text-center justify-between md:text-right">Email</h1>
                <div className="text-center md:text-right">test@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
