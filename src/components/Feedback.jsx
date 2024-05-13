/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Slider from "react-slick";
import { FaStar, FaRegStar } from "react-icons/fa";

import { IoCloseSharp } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Feedback() {
  const [expandedReview, setExpandedReview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [course, setCourse] = useState(""); // Initial course value, empty string means no course selected
  const [rating, setRating] = useState(0);

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
  }; // Initial rating value, 0 means no rating

  const handleStarClick = (value) => {
    setRating(value);
  };
  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <div
      name="Feedback"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div className="flex justify-between items-center mb-4 pt-5">
        <h1 className="text-3xl font-semibold">Feedback</h1>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl px-4 py-2"
          onClick={() => handleFeedbackClick()} // Open modal on button click
        >
          provide feedback
        </button>
      </div>
      <span>Happy candidates feedbacks:</span>
      <div className="w-11/12 md:w-3/4 mx-auto mt-10 justify-between items-center">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div
              key={d.name}
              className="feedback-card bg-white rounded-lg shadow-lg overflow-hidden p-4 h-72"
            >
              <p className="text-xl text-center font-semibold">{d.name}</p>
              <p className="text-l text-center my-1">{d.course} course</p>
              <div className="star-rating flex justify-center mb-3 my-2">
                {renderStars(d.rating)}
              </div>
              <div className="review-content h-full overflow-y-auto">
                {expandedReview === index ? (
                  <p className="text-center my-2">{d.review}</p>
                ) : (
                  <p className="text-center my-2">
                    {d.review.slice(0, 100)}{" "}
                    <button
                      onClick={() => toggleExpandedReview(index)}
                      className="text-blue-700 underline"
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
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
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
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
              />
            </div>

            <div className="flex flex-col mb-4 relative">
              <label htmlFor="course" className="block text-gray-700">
                Course
              </label>
              <select
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="course"
                name="course"
                value={course}
                onChange={handleCourseChange}
              >
                <option value="default">
                  Select your course
                </option>
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
              <div className="flex items-center shadow rounded-lg appearance-none border py-2 px-3 bg-white leading-tight focus:outline-none focus:shadow-outline">
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
                        className="text-yellow-500"
                      />
                    ) : (
                      <FaRegStar
                        size={26}
                        key={value}
                        className="text-yellow-500"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Feedback
              </label>
              <textarea
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-h-40 min-h-20 h-10 resize-y"
                id="message"
                name="message"
                type="text"
                placeholder="Enter your Query"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

const data = [
  {
    id: 1,
    name: `Priya Sharma`,
    course: "Java",
    rating: 3,
    review: `I enrolled in the Java course, and it was an amazing learning experience! The content was comprehensive, and the instructors were very knowledgeable.`,
  },
  {
    id: 2,
    name: `Rajesh Patel`,
    course: "Web Development",
    rating: 2,
    review: `The Web Development course exceeded my expectations. I learned a lot of practical skills that I could immediately apply to real-world projects. Highly recommended!`,
  },
  {
    id: 3,
    name: `Aarav Gupta`,
    course: "HR",
    rating: 3,
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
    rating: 3,
    review: `The Testing course was comprehensive and well-structured. It covered all the essential aspects of software testing, and I feel ready to take on testing projects in my job.`,
  },
  {
    id: 6,
    name: `Ishaan Sharma`,
    course: "Recruitment",
    rating: 4,
    review: `I enrolled in the Recruitment course to improve my hiring skills, and it was a great decision. The course materials were practical, and I learned valuable techniques for attracting top talent.`,
  },
  {
    id: 7,
    name: `Neha Gupta`,
    course: "HR",
    rating: 3,
    review: `I recently completed the HR course, and I must say it was fantastic! The instructors were engaging, and the course content was very relevant to modern HR practices.`,
  },
];

export default Feedback;
