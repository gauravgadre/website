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
import Spinner from "./Spinner";

import { IoCloseSharp } from "react-icons/io5";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";

function Courses() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
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
  const handleEnrollClick = () => {
    setIsModalOpen(true);
    setCurrentStep(1);
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
    formData.append("certificates", enrollmentData.certificates);
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://e45a-45-118-105-195.ngrok-free.app/submitformdata",
        formData
      );
      // Handle successful API response
      if (response.status == 200) {
        handleModalClose();
        toast.success("Course enrolled successfully!");
      } else {
        toast.error("Something went wrong!.Please try again");
      }
    } catch (error) {
      toast.error("Something went wrong!.Please try again");
    } finally {
      setIsLoading(false); // Clear loading state
    }
  };

  return (
    <>
      <div
        name="Courses"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">Courses</h1>
          <span className=" underline font-semibold">Trainings available</span>
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
                <div className="px-6 py-4 space-x-3 flex justify-around">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center px-5 py-2"
                    onClick={handleEnrollClick} // Open modal on button click
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
              {/* <div className="px-6 py-4 space-x-3 flex justify-around">
              <h1 className="text-black  px-2 py-2 ">Enrolment form</h1>
              <button
                className="px-2 py-2"
                onClick={handleModalClose} // Open modal on button click
              >
                <IoCloseSharp size={24} />
              </button>
            </div> */}

              <div className="flex justify-between items-center px-15 py-4">
                <h1 className="text-black px-2 py-2">Enrollment form</h1>
                <button className="px-2 py-2" onClick={handleModalClose}>
                  <IoCloseSharp size={30} />
                </button>
              </div>
              {isLoading && (
                <div className="fixed inset-0 bg-blue-100 bg-opacity-80 flex items-center justify-center z-50">
                  {/* Add your loader component here */}
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
                    <label className="block text-gray-700">Course</label>
                    <input
                      className={`shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        formErrors.course ? "border-red-500" : ""
                      }`}
                      id="course"
                      name="course"
                      type="text"
                      placeholder="Enter your course"
                      value={enrollmentData.course}
                      onChange={handleInputChange}
                    />
                  </div>

                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center px-5 py-2"
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
                      className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center px-5 py-2"
                      onClick={handleBackStep}
                    >
                      <FaLongArrowAltLeft />
                      <span className="ml-1">back</span>
                    </button>

                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center px-5 py-2"
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
      <hr />
    </> 
  );
}

export default Courses;
