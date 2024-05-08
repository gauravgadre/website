/* eslint-disable no-unused-vars */
import React from "react";
import java from "../../public/java.png";
import incident_manager from "../../public/incident_manager.jpeg";
import web from "../../public/web.jpeg";
import recruitment from "../../public/recruitment.png";
import hr from "../../public/hr.jpeg";
import testing from "../../public/testing.png";
import BA from "../../public/BA.jpeg";
import  softskill from "../../public/softskill.jpeg"
import  internship from "../../public/internship.jpeg"
function Courses() {
  const cardItem = [
    {
      id: 1,
      logo: hr,
      name: "HR",
    },
    {
      id: 2,
      logo: recruitment,
      name: "Recruitment",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: web,
      name: "Web Developement",
    },
    {
      id: 5,
      logo: testing,
      name: "Testing/Automation",
    },
    {
      id: 6,
      logo: incident_manager,
      name: "Incident Manager",
    },

    {
      id: 7,
      logo: BA,
      name: "Bussiness Analyst",
    },
    {
      id: 8,
      logo: softskill,
      name: "Soft Skills",
    },
    {
      id: 9,
      logo: internship,
      name: "Internship Certificate",
    },
  ];
  return (
    <div
      name="Courses"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Courses</h1>
        <span className=" underline font-semibold">Tranings available</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer md:hover:scale-110 hover:bg-white duration-200"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 flex justify-around">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded">
                  Demo
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Contact person
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;