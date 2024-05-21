/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import java from "../../public/java.png";
import incident_manager from "../../public/incident_manager.jpeg";
import web from "../../public/web.jpeg";
import recruitment from "../../public/recruitment.png";
import hr from "../../public/hr.jpeg";
import testing from "../../public/testing.png";
import BA from "../../public/BA.jpeg";
import softskill from "../../public/softskill.jpeg";
import internship from "../../public/internship.jpeg";
import msw from "../../public/msw.png";
import Spinner from "./Spinner";
import ToastSuccess from "./ToastSuccess";
import ToastError from "./ToastError";

import { IoCloseSharp } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from "axios";

function Courses() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isToastSucess, setToastSucess] = useState(false);
  const [isToastError, setToastError] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: false,
    contactNo: false,
    email: false,
    course: false,
    address: false,
  });
  const [enrollmentData, setEnrollmentData] = useState({
    name: "",
    contactNo: "",
    email: "",
    course: "",
    address: "",
    kyc: "",
    photo: "",
    certificates: "",
  });

  const cardItem = [
    {
      id: 1,
      logo: java,
      name: "Java",
      content: "Java Programming, Object-Oriented Design, Spring Framework, RESTful APIs, Database Management, Version Control (Git), Testing & Debugging"
    },
    {
      id: 2,
      logo: web,
      name: "Web Developement",
      content:
        "HTML, CSS, Java Script, UI/UX Design, Databases, Web APIs, Version Control/Git",
    },
    {
      id: 3,
      logo: testing,
      name: "Testing/Automation",
      content:
        "Manual, Automation, Programming Languages, Test Automation Frameworks, Test Automation Tools, API Testing, Test Reporting and Analysis",
    },
    {
      id: 4,
      logo: hr,
      name: "HR",
      content:
        "Introduction to Human Resource Management, HRMS, Statutory Compliance, Payroll, Employee Life Cycle Management, HR and Business, Best practices in HR",
    },
    {
      id: 5,
      logo: recruitment,
      name: "Recruitment",
      content:
        "Understanding JD, Sourcing, core recruitment, Calling, documentation process, how to handle job portals, salary negotiations, Excel",
    },
    {
      id: 6,
      logo: incident_manager,
      name: "Incident Manager",
      content:
        "Communication Skills, Problem-Solving and Decision-Making, Leadership and Team Management, Stakeholder Management, Documentation and Reporting",
    },

    {
      id: 7,
      logo: BA,
      name: "Bussiness Analyst",
      content:
        "Analytical Skills, Requirement Gathering from client, Documentation and Reporting,Domain Knowledge, Business Process Modeling, Stakeholder Management",
    },
    {
      id: 8,
      logo: msw,
      name: "Master of Social Work (MSW)",
      content:
        "Data Collection, Community Management, Documenting into database",
    },
  ];

  useEffect(() => {
    const {
      name = "",
      contactNo = "",
      email = "",
      course = "",
      address = "",
    } = enrollmentData; // Set default values for destructuring
    const errors = {
      name: name.trim() === "",
      contactNo: contactNo.trim() === "",
      email: !isValidEmail(email),
      course: course.trim() === "",
      address: address.trim() === "",
    };

    // Check if all required fields are filled in
    const allFieldsFilled = Object.values(enrollmentData).every(
      (value) => typeof value === "string" && value.trim() !== "" // Check if value is a string before calling trim
    );

    const valid =
      !Object.values(errors).some((error) => error) && allFieldsFilled;
    setIsValid(valid);
    setFormErrors(errors);
  }, [enrollmentData]);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setEnrollmentData((prevData) => ({
        ...prevData,
        [name]: files[0], // Assuming single file upload
      }));
    } else {
      setEnrollmentData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBackStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleEnrollClick = (courseName) => {
    setIsModalOpen(true);
    setCurrentStep(1);
    setEnrollmentData((prevData) => ({
      ...prevData,
      course: courseName,
    }));
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentStep(1);
    setEnrollmentData({
      name: "",
      contactNo: "",
      email: "",
      course: "",
      address: "",
      kyc: "",
      photo: "",
      certificates: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append form data to FormData object
    Object.keys(enrollmentData).forEach((key) => {
      formData.append(key, enrollmentData[key]);
    });
    // // Append files to FormData object
    formData.append("photo", enrollmentData.photo);
    formData.append("kyc", enrollmentData.kyc);
    formData.append("certificate", enrollmentData.certificates);
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://website-backend-r6r5.onrender.com/api/enrollcourse",
        formData
      );
      // Handle successful API response
      if (response.status == 200) {
        handleModalClose();
        setToastSucess(true); // Set the state to true to render the success toast

        setTimeout(() => {
          setToastSucess(false); // Reset toast success after 2 seconds
        }, 2000);
      } else {
        setToastError(true);
      }
    } catch (error) {
      setToastError(true);
    } finally {
      setIsLoading(false); // Clear loading state
    }
  };

  return (
    <>
      <div
        name="Courses"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 bg-white text-gray-800"
      >
        <div>
          <h1 className="pt-4 text-3xl font-semibold text-black mb-4 ">Courses</h1>
          {/* <span className=" underline font-semibold">Trainings available</span> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
            {cardItem.map(({ id, logo, name, content }) => (
              <div
                className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer md:hover:scale-110 hover:bg-white bg-blue-100 duration-200 flex flex-col justify-between"
                key={id}
              >
                <div>
                  <img
                    src={logo}
                    className="w-[80px] h-[80px] p-1 rounded-full border-[2px] mx-auto"
                    alt=""
                  />
                  <div className="px-2 font-semibold text-l mb-2 mt-1 text-center text-gray-800">
                    {name}
                  </div>
                  <p className="px-2 text-gray-800 text-sm ">{content}</p>
                </div>
                <div className="px-6 py-4">
                  <button
                    className="bg-blue-900 hover:bg-blue-500 text-white rounded-xl flex items-center justify-center w-full py-2"
                    onClick={() => handleEnrollClick(name)}
                  >
                    enroll now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for enrollment form */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <form
              className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
              onSubmit={handleSubmit}
            >
              <div className="flex justify-between items-center px-15 py-4">
                <h1 className="text-black px-2 py-2">Enrollment form</h1>
                <button className="px-2 py-2" onClick={handleModalClose}>
                  <IoCloseSharp size={30} />
                </button>
              </div>
              {isLoading && (
                <div className="fixed inset-0  bg-white bg-opacity-90 flex items-center justify-center z-50">
                  {/* Add your Spinner component here */}
                  <Spinner />
                </div>
              )}

              {currentStep === 1 && (
                <>
                  <div className="flex flex-col mb-4">
                    <label className="block text-gray-700">FullName</label>
                    <input
                      className={`shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        formErrors.name ? "border-red-500" : ""
                      }`}
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your fullname"
                      value={enrollmentData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                      className={`shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        formErrors.email ? "border-red-500" : ""
                      }`}
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Enter your email "
                      value={enrollmentData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label className="block text-gray-700">
                      Contact Number
                    </label>
                    <input
                      className={`shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        formErrors.contactNo ? "border-red-500" : ""
                      }`}
                      id="contactNo"
                      name="contactNo"
                      type="number"
                      placeholder="Enter your contact number"
                      value={enrollmentData.contactNo}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    {/* <label className="block text-gray-700">Course</label> */}
                    <input
                      className={`shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        formErrors.course ? "border-red-500" : ""
                      }`}
                      id="course"
                      name="course"
                      type="hidden"
                      placeholder="Enter your course"
                      value={enrollmentData.course}
                      onChange={handleInputChange}
                      readOnly
                    />
                  </div>

                  <button
                    className="bg-blue-900 hover:bg-blue-500 text-white rounded-xl flex items-center px-5 py-2"
                    onClick={handleNextStep}
                    type="button"
                    disabled={isValid}
                  >
                    next <FaLongArrowAltRight className="ml-1" />
                  </button>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <div className="flex flex-col mb-4">
                    <label className="block text-gray-700">Address</label>
                    <textarea
                      className={`shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-h-40 min-h-10 h-10 resize-y  ${
                        formErrors.address ? "border-red-500" : ""
                      }`}
                      id="address"
                      name="address"
                      placeholder="Enter your address"
                      value={enrollmentData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label className="block text-gray-700">Photo</label>
                    <input
                      className="shadow bg-white rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                      id="photo"
                      name="photo"
                      type="file"
                      onChange={handleInputChange}
                      required // Make the photo field required
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label className="block text-gray-700">
                      KYC document Adhaar/PAN
                    </label>
                    <input
                      className="shadow bg-white rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="kyc"
                      name="kyc"
                      type="file"
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="flex flex-col mb-4">
                    <label className="block text-gray-700">
                      Educational Certificates
                    </label>
                    <input
                      className="shadow bg-white rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="certificates"
                      name="certificates"
                      type="file"
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="px-6 space-x-3 flex justify-around">
                    <button
                      className="bg-blue-900 hover:bg-blue-500 text-white rounded-xl flex items-center px-5 py-2"
                      onClick={handleBackStep}
                    >
                      <FaLongArrowAltLeft />
                      <span className="ml-1">back</span>
                    </button>

                    <button
                      type="submit"
                      className="bg-blue-900 hover:bg-blue-500 text-white rounded-xl flex items-center px-5 py-2"
                    >
                      submit
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        )}
      </div>
      
      {isToastSucess && (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-500">
          <ToastSuccess
            message="Course enrolled successfully!"
            onClose={() => setToastSucess(false)}
          />
        </div>
      )}
      {isToastError && (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-500">
          <ToastError
            message="Something went wrong ! Please try again"
            onClose={() => setToastError(false)}
          />
        </div>
      )}
      <br/>
      <br/>
    </>
  );
}

export default Courses;
