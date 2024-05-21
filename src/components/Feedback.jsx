/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Slider from "react-slick";
import { FaStar, FaRegStar } from "react-icons/fa";
import Spinner from "./Spinner";
import { IoCloseSharp } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import ToastSuccess from "./ToastSuccess";
import ToastError from "./ToastError";

function Feedback() {
  const [expandedReview, setExpandedReview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [course, setCourse] = useState(""); // Initial course value, empty string means no course selected
  const [rating, setRating] = useState(0);
  const [courseSelect, setCourseSelect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isToastSucess, setToastSucess] = useState(false);
  const [isToastError, setToastError] = useState(false);

  const [nameValid, setNameValid] = useState(false);
  const [courseValid, setCourseValid] = useState(false);
  const [ratingValid, setRatingValid] = useState(false);
  const [feedbackValid, setFeedbackValid] = useState(false);

  const resetForm = () => {
    setRating(0);
    setCourse("");
    setIsModalOpen(false);
    setCourseSelect(false);
    setNameValid(false);
    setCourseValid(false);
    setRatingValid(false);
    setFeedbackValid(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time by default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Less than Medium device (md) breakpoint
        settings: {
          dots: true,
          slidesToShow: 1, // Show 1 card at a time below md devices
          slidesToScroll: 1,
        },
      },
    ],
  };

  const toggleExpandedReview = (index) => {
    if (expandedReview === index) {
      setExpandedReview(null);
    } else {
      setExpandedReview(index);
    }
  };

  const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        // Render filled star icons
        stars.push(<FaStar key={i} size={22} className="text-yellow-400" />);
      } else {
        // Render empty star icons for remaining stars
        stars.push(<FaRegStar key={i} size={22} className="text-yellow-400" />);
      }
    }

    return stars;
  };
  const handleFeedbackClick = (courseName) => {
    setIsModalOpen(true);
  };

  const handleFeedbackClose = () => {
    setRating(0);
    setCourse("");
    setIsModalOpen(false);
    setCourseSelect(false);
    resetForm();
  };
  const handleFeedbackChange = (e) => {
    const feedback = e.target.value;
    setFeedbackValid(feedback.trim() !== "");
  };
  const handleStarClick = (value) => {
    setRating(value);
    setRatingValid(value !== 0);
  };
  const handleCourseChange = (e) => {
    const courseName = e.target.value;
    setCourseSelect(true);
    setCourse(courseName);
    setCourseValid(courseName.trim() !== "");
  };

  const validateName = (e) => {
    const value = e.target.value;
    setNameValid(value.trim() !== "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nameValid || !courseValid || !ratingValid || !feedbackValid) {
      return;
    }
    try {
      const feedbackData = {
        name: e.target.name.value,
        course,
        rating,
        feedback: e.target.feedback.value,
      };
      setIsLoading(true);
      const response = await axios.post(
        "https://website-backend-r6r5.onrender.com/api/feedback",
        feedbackData
      );

      console.log("Feedback submitted successfully:", response);

      if (response.status === 200) {
        setIsModalOpen(false); // Close the modal after successful submission
        setToastSucess(true); // Set the state to true to render the success toast

        setTimeout(() => {
          setToastSucess(false); // Reset toast success after 2 seconds
        }, 2000);

        handleFeedbackClose(); // Clear form data
      } else {
        // toast.error("Something went wrong!.Please try again");
        setToastError(true);
        setTimeout(() => {
          setToastError(false); // Reset toast success after 2 seconds
        }, 2000);
      }
    } catch (error) {
      // toast.error("Something went wrong!.Please try again");
      setToastError(true);
    } finally {
      setIsLoading(false); // Clear loading state
    }
  };

  return (
    <>
      <div
        name="Feedback"
        className="max-w-screen-2xl container mx-auto px-4 md:py-20 md:px-20 "
      >
        <span className="flex justify-between items-center">
          <h1 className=" text-3xl font-semibold text-black mb-4 ">
            Feedback
          </h1>

          <button
            className="bg-blue-900 hover:bg-blue-500 text-white rounded-xl md:px-4 px-2 py-2"
            onClick={() => handleFeedbackClick()} // Open modal on button click
          >
            provide feedback
          </button>
        </span>
        
        <span className="text-blue-900">Happy candidates feedbacks:</span>
        <div className="w-11/12 md:w-3/4 mx-auto  mt-10 justify-between items-center">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div
                key={d.name}
                className="feedback-card bg-blue-100 rounded-lg shadow-lg overflow-hidden p-4 h-72"
              >
                <p className="text-xl text-center font-semibold text-gray-800">{d.name}</p>
                <p className="text-l text-center my-1 text-gray-800">{d.course} course</p>
                <div className="star-rating flex justify-center mb-3 my-2">
                  {renderStars(d.rating)}
                </div>
                <div className="review-content h-full w-full overflow-y-auto text-gray-800">
                  {expandedReview === index ? (
                    <p className="text-center my-2">{d.review}</p>
                  ) : (
                    <p className="text-center my-2">
                      {d.review.slice(0, 100)}{" "}
                      <button
                        onClick={() => toggleExpandedReview(index)}
                        className="text-blue-900 underline"
                      >
                        Read More
                      </button>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* Modal for feedback form */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <form
              onSubmit={handleSubmit}
              className=" bg-slate-200 w-96 px-8 py-6 rounded-xl"
            >
              <div className="flex justify-between items-center px-15 py-4">
                <h1 className="text-black px-2 py-2">Provide your feedback</h1>
                <button className="px-2 py-2" onClick={handleFeedbackClose}>
                  <IoCloseSharp size={30} />
                </button>
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Full Name
                </label>
                <input
                  className={`shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    !nameValid ? "border-red-500" : ""
                  }`}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  onChange={validateName}
                />
              </div>

              <div className="flex flex-col mb-4 relative">
                <label htmlFor="course" className="block text-gray-700">
                  Course
                </label>
                <select
                  className={`shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    !courseValid ? "border-red-500" : ""
                  }`}
                  id="course"
                  name="course"
                  value={course}
                  onChange={handleCourseChange}
                >
                  {!courseSelect && (
                    <option value="" disabled>
                      Select your course
                    </option>
                  )}
                  <option value="HR">HR</option>
                  <option value="Recruitment">Recruitment</option>
                  <option value="Java">Java</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Testing/Automation">Testing/Automation</option>
                  <option value="Incident Manager">Incident Manager</option>
                  <option value="Business Analyst">Business Analyst</option>
                  <option value="Soft Skills">Soft Skills</option>
                  <option value="Master of Social Work (MSW)">
                    Master of Social Work (MSW)
                  </option>
                  <option value="Internship">Internship</option>
                </select>

                <div className="pointer-events-none absolute inset-y-11 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.29289 12.7071C9.68342 13.0976 10.3166 13.0976 10.7071 12.7071L14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L10 10.5858L6.70711 7.29289C6.31658 6.90237 5.68342 6.90237 5.29289 7.29289C4.90237 7.68342 4.90237 8.31658 5.29289 8.70711L9.29289 12.7071Z"
                      fill="#374151"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="rating" className="block text-gray-700">
                  Rating
                </label>
                <div
                  className={`flex items-center shadow rounded-lg appearance-none border py-2 px-2 bg-white leading-tight focus:outline-none focus:shadow-outline${
                    !ratingValid ? "border-red-500" : ""
                  }`}
                >
                  {[1, 2, 3, 4, 5].map((value) => (
                    <div
                      key={value}
                      className="cursor-pointer px-2"
                      onClick={() => handleStarClick(value)}
                    >
                      {value <= rating ? (
                        <FaStar
                          key={value}
                          size={26}
                          className="text-yellow-400"
                        />
                      ) : (
                        <FaRegStar
                          size={26}
                          key={value}
                          className="text-yellow-400"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="feedback" className="block text-gray-700">
                  Feedback
                </label>
                <textarea
                  className={`shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-h-40 min-h-20 h-10 resize-y${
                    !feedbackValid ? "border-red-500" : ""
                  }`}
                  id="feedback"
                  name="feedback"
                  type="text"
                  placeholder="Enter your feedback"
                  onChange={handleFeedbackChange}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-900 hover:bg-blue-500 text-white rounded-xl flex items-center px-5 py-2"
              >
                submit
              </button>
            </form>
            {isLoading && (
              <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
                {/* Add your Spinner component here */}
                <Spinner />
              </div>
            )}
          </div>
        )}
      </div>

      {isToastSucess && (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-500">
          <ToastSuccess
            message="Feedback submitted successfully!"
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
      <br />
      <br />
      <hr></hr>
    </>
  );
}

const data = [
  {
    id: 1,
    name: `Priya Sharma`,
    course: "Java",
    rating: 5,
    review: `I enrolled in the Java course, and it was an amazing learning experience! The content was comprehensive, and the instructors were very knowledgeable.`,
  },
  {
    id: 2,
    name: `Rajesh Patel`,
    course: "Web Development",
    rating: 4,
    review: `The Web Development course exceeded my expectations. I learned a lot of practical skills that I could immediately apply to real-world projects. Highly recommended!`,
  },
  {
    id: 3,
    name: `Aarav Gupta`,
    course: "HR",
    rating: 4,
    review: `As someone working in HR, I found the HR course extremely helpful. It provided valuable insights into talent management, employee relations, and HR strategies.`,
  },
  {
    id: 4,
    name: `Ananya Singh`,
    course: "Incident Manager",
    rating: 5,
    review: `Being an Incident Manager, I needed a course that could enhance my skills in handling critical situations. The Incident Manager course did exactly that, and I feel more confident in my role now.`,
  },
  {
    id: 5,
    name: `Aditya Khanna`,
    course: "Testing/Automation",
    rating: 4,
    review: `The Testing course was comprehensive and well-structured. It covered all the essential aspects of software testing, and I feel ready to take on testing projects in my job.`,
  },
  {
    id: 6,
    name: `Ishaan Sharma`,
    course: "Recruitment",
    rating: 5,
    review: `I enrolled in the Recruitment course to improve my hiring skills, and it was a great decision. The course materials were practical, and I learned valuable techniques for attracting top talent.`,
  },
  {
    id: 7,
    name: `Neha Gupta`,
    course: "Master of Social Work (MSW)",
    rating: 4,
    review: `I recently completed the HR course, and I must say it was fantastic! The instructors were engaging, and the course content was very relevant to modern HR practices.`,
  },
];

export default Feedback;
