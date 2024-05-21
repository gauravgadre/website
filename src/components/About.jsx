/* eslint-disable no-unused-vars */
import React from "react";

function About() {
  return (
    <>
      <div
        name="About"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 bg-white text-gray-800"
      >
        <div>
          <h1 className="pt-4 text-3xl font-semibold text-black mb-4 ">About</h1>
          <p className="bg-blue-100 rounded shadow-md">
            At Creative Tech Skills Institute, we believe in the transformative
            power of education and innovation. Founded with a vision to bridge
            the gap between traditional learning and the ever-changing demands
            of the technology sector, our institute stands as a beacon of
            excellence in IT and Non-IT education.
          </p>
          <br />

          <h1 className=" font-semibold text-xl text-blue-900 ">Our Mission</h1>
          <p className="bg-blue-100 rounded shadow-md">
            Our mission is to equip students with the essential skills and
            knowledge required to excel in their chosen fields. We are dedicated
            to fostering an environment of creativity, critical thinking, and
            practical application. By integrating hands-on learning with
            theoretical expertise, we prepare our students to meet the
            challenges of the modern workforce with confidence and competence.
          </p>
          <br />
          <br />
          <h1 className="font-semibold text-xl text-blue-900">
            Why Choose Us?
          </h1>
          <ul className="list-disc pl-5 space-y-2 mt-2 bg-blue-100 rounded shadow-md">
            <li>
              <strong>Comprehensive Curriculum:</strong> Our courses are
              designed in collaboration with industry experts to ensure
              relevance and rigor. We cover a wide range of topics, from
              fundamental principles to advanced specializations.
            </li>
            <li>
              <strong>Experienced Instructors:</strong> Our faculty comprises
              seasoned professionals and academics who bring real-world
              experience and academic excellence into the classroom.
            </li>
            <li>
              <strong>State-of-the-Art Facilities:</strong> Our institute is
              equipped with the latest technology and resources, providing
              students with an optimal learning environment.
            </li>
            <li>
              <strong>Flexible Learning Options:</strong> We offer a variety of
              learning formats, including in-person classes, online courses, and
              hybrid models to accommodate diverse learning preferences and
              schedules.
            </li>
            <li>
              <strong>Career Support:</strong> We provide robust career
              services, including resume building, interview preparation, and
              job placement assistance to help our students launch and advance
              their careers.
            </li>
          </ul>
          <br />
          <br />
          <h1 className=" font-semibold text-xl text-blue-900">
            Join Us Today
          </h1>
          <p className="bg-blue-100 rounded shadow-md">
            Whether you are an aspiring IT professional looking to break into
            the tech industry or a seasoned professional seeking to update your
            skills, Creative Tech Skills Institute is your partner in achieving
            your educational and career goals. Explore our course offerings,
            meet our dedicated team, and become part of a community committed to
            excellence in education.
          </p>
          <br />
          <br />
        </div>
      </div>
      <hr />
    </>
  );
}

export default About;
