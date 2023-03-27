import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          My name is Abhishek Kumar, I have done my schooling from Ralli International School
          and graduation from Inderprastha Engineering College in IT branch(2022 Passout). I have own the skills
          HTML, CSS, Python, JS, React, Tailwind CSS and also i have done projects which is Color detection & Fundamental Analysis Of Stocks.
        </p>

        <br />

        <p className="text-xl">
          My hobbies are <b className="text-blue-600">Playing computer games:</b> I enjoy spending my free time exploring virtual worlds and challenging myself with various gaming scenarios. I love the excitement of trying out new games and immersing myself in different gaming genres.
<b className="text-blue-600">Playing cricket:</b> Cricket is a sport that I've loved playing since my childhood. I enjoy the camaraderie of playing with a team, strategizing on the field, and pushing myself to improve my skills.
        </p>
      </div>
    </div>
  );
};

export default About;
