import React from "react";
import main from "/gif/main.gif";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row gap-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">Hi, I'm Ankit Kumar Singh</h2>
          <div className="flex space-x-2 text-2xl sm:text-4xl text-white font-bold">
          <h3>I am a</h3>
          <ReactTyped
            className="text-[#854CE6] font-bold"
            strings={[
              "Software Engineer",
              "Full Stack Developer",
              "Programmer",
              "Gamer",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop={true}
          />
          </div>
          <p className="text-gray-500 py-4 max-w-md md:text-lg">
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </p>
          <div>
            <a href="/ankit__resume.pdf" download={true} target="_blank" rel="noreferrer" className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-tr from-[#DA00FF] to-[#9C00FF] cursor-pointer">
            <span className="group-hover:translate-x-2 duration-300">Check Resume </span>
                
                <span className="group-hover:translate-x-3 duration-300">
                    <MdOutlineKeyboardDoubleArrowRight size={25} className="ml-1" />
                </span>
            </a>
          </div>
        </div>
        <div>
            <img src="/img/hero.jpg" alt="my profile" className="w-[16rem] mx-auto md:w-[25rem] rounded-2xl mt-20 md:mt-0" />
        </div>
      </div>
    </div>
  );
};

export default Home;
