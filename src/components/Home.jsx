/* eslint-disable no-unused-vars */
import React from "react";

import pic from "../../public/csi_logo.png";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:py-20 py-8 md:px-20 my-auto bg-blue-100 text-gray-800"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className=" text-2xl font-bold text-black mb-4 ">
              Welcome to CreativeTech Skills Institute.
            </span>
            <div className="flex space-x-1 mb-6">
              <h1>You will learn</h1>
              <ReactTyped
                className="text-blue-900"
                strings={[
                  "HR course.",
                  "Recruitment course.",
                  "Java course.",
                  "Web Development course.",
                  "Testing/Automation course.",
                  "Incident Manager course.",
                  "Business Analyst course.",
                  "MSW course.",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify mb-6">
              Here innovation meets expertise, and your journey to mastering
              cutting-edge IT and non-IT skills begins. Our commitment is to
              provide comprehensive training and education tailored to the
              demands of today's rapidly evolving technology sector. Step into
              the future with our diverse range of courses and discover
              limitless possibilities in the dynamic digital landscape. At
              CreativeTech Skills Institute, we empower aspiring professionals
              with the knowledge, skills, and confidence to thrive in tomorrow's
              tech-driven world.
            </p>
            <br />
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              {/* <div className="space-y-2">
                <h1 className="text-xl md:text-center">follow us on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaSquareFacebook
                        className="text-2xl cursor-pointer"
                        style={{ color: "#3B5998" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin
                        className="text-2xl cursor-pointer"
                        style={{ color: "#0077b5" }}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <FaInstagram
                        className="text-2xl cursor-pointer"
                        style={{
                         
                          background:
                            "linear-gradient(45deg,  #F58529, #FEDA77, #DD2A7B, #8134AF, #515BD4)",
                        }}
                      />
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>

          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-14 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[400px] md:h-[400px] w-[250px] h-[250px] mx-auto block"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
