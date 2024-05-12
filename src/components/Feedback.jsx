/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Feedback() {
  const [expandedReview, setExpandedReview] = useState(null);

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

  return (
    <>
      <div
        name="Feedback"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-semibold mb-4 pt-5">Feedback</h1>
        <span>happy candidates feedbacks:</span>
        <div className="w-11/12 md:w-3/4 mx-auto">
          <div className="mt-10">
            <Slider {...settings}>
              {data.map((d, index) => (
                <div
                  key={d.name}
                  className="feedback-card bg-white rounded-lg shadow-lg overflow-hidden p-4 h-60"
                >
                  <p className="text-xl text-center font-semibold">{d.name}</p>
                  <div className="review-content h-full overflow-y-auto">
                    {expandedReview === index ? (
                      <p className="text-center my-2">{d.review}</p>
                    ) : (
                      <p className="text-center my-2">
                        {d.review.slice(0, 100)}{" "}
                        <button
                          onClick={() => toggleExpandedReview(index)}
                          className="text-indigo-500 underline"
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
        </div>
      </div>
      <br />
      <br />
      <hr />
    </>
  );
}

const data = [
  {
    id: 1,
    name: `Priya Sharma`,
    review: `I enrolled in the Java course, and it was an amazing learning experience! The content was comprehensive, and the instructors were very knowledgeable.`,
  },
  {
    id: 2,
    name: `Rajesh Patel`,
    review: `The Web Development course exceeded my expectations. I learned a lot of practical skills that I could immediately apply to real-world projects. Highly recommended!`,
  },
  {
    id: 3,
    name: `Aarav Gupta`,
    review: `As someone working in HR, I found the HR course extremely helpful. It provided valuable insights into talent management, employee relations, and HR strategies.`,
  },
  {
    id: 4,
    name: `Ananya Singh`,
    review: `Being an Incident Manager, I needed a course that could enhance my skills in handling critical situations. The Incident Manager course did exactly that, and I feel more confident in my role now.`,
  },
  {
    id: 5,
    name: `Aditya Khanna`,
    review: `The Testing course was comprehensive and well-structured. It covered all the essential aspects of software testing, and I feel ready to take on testing projects in my job.`,
  },
  {
    id: 6,
    name: `Ishaan Sharma`,
    review: `I enrolled in the Recruitment course to improve my hiring skills, and it was a great decision. The course materials were practical, and I learned valuable techniques for attracting top talent.`,
  },
  {
    id: 7,
    name: `Neha Gupta`,
    review: `I recently completed the HR course, and I must say it was fantastic! The instructors were engaging, and the course content was very relevant to modern HR practices.`,
  },
];

export default Feedback;
