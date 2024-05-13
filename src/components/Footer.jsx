/* eslint-disable no-unused-vars */
import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareFacebook
                  size={24}
                  className="cursor-pointer"
                  style={{ color: "#3B5998" }}
                />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={24}
                  className="cursor-pointer"
                  style={{ color: "#0077b5" }}
                />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoYoutube
                  size={24}
                  className="cursor-pointer"
                  style={{ color: "#FF0000" }}
                />
              </a>
              <a
                href="https://www.telegram.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram
                  size={24}
                  className="cursor-pointer"
                  style={{ color: "#0088cc" }}
                />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-5 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Skill Spark. All rights reserved.
              </p>
              <p className="text-sm">Skill Spark</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
