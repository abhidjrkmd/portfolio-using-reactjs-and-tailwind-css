import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-blue-500">
            I'm a Front-End Developer
          </h2>
          <p className="text-white bg-black-500 py-4 max-w-md">
            I am a freshers want to start my career in web development 
            Currently, I love to work on web application using technologies like
            React, Tailwind, JS, Python, SQL.
          </p>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2x2 mx-auto w-2/3 md:w-70%"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
