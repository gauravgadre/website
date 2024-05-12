/* eslint-disable no-unused-vars */
import React from "react";

import pic from "../../public/skillspark.jpeg";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome to learning</span>
            <div className="flex space-x-1 text-2xl">
              <h1>You will learn</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={[
                  "HR course",
                  "Recruiter course",
                  "Java course",
                  "Web Developement course",
                  "Testing course",
                  "Incident Manager course",
                  "Bussiness Analyst course",
                  "Soft Skills course",
                  "Master of Social Work"
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />{" "}
              here
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quisquam, recusandae consequatur. Accusamus sint libero eligendi
              laborum fuga repudiandae? Asperiores tempore eos animi dolores
              corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio
              cum delectus sit voluptatum aut ratione quaerat veniam aperiam!
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-15 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[400px] md:h-[400px] mx-auto block"
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
