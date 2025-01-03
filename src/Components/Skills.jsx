import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGitAlt } from "react-icons/fa";
import { SiSpring, SiSpringboot, SiMysql, SiRedux, SiTailwindcss, SiPostman } from "react-icons/si";

const Skills = () => {
    const techs = [
        {
          id: 1,
          icon: <FaHtml5 size={30} />,
          title: "HTML",
        },
        {
          id: 2,
          icon: <FaCss3Alt size={30} />,
          title: "CSS",
        },
        {
          id: 3,
          icon: <FaJs size={30} />,
          title: "JavaScript",
        },
        {
          id: 4,
          icon: <FaReact size={30} />,
          title: "React",
        },
        {
          id: 5,
          icon: <SiTailwindcss size={30} />,
          title: "Tailwind",
        },
        {
          id: 6,
          icon: <SiRedux size={30} />,
          title: "Redux",
        },
        {
          id: 7,
          icon: <FaJava size={30} />,
          title: "Java",
        },
        {
          id: 8,
          icon: <SiSpring size={30} />,
          title: "Spring",
        },
        {
          id: 9,
          icon: <SiSpringboot size={30} />,
          title: "Spring Boot",
        },
        {
          id: 10,
          icon: <SiMysql size={30} />,
          title: "MySQL",
        },
        {
          id: 11,
          icon: <SiPostman size={30} />,
          title: "Postman",
        },
        {
          id: 12,
          icon: <FaGitAlt size={30} />,
          title: "Git & GitHub",
        },
      ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">Here are some of my skills on which i have been working on for the past 3 years</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, icon, title }) => (
            <div
              key={id}
              className={`shadow-2xl hover:scale-110 duration-500 py-2 rounded-lg flex flex-col items-center justify-center p-4 hover:shadow-gray-800`}
            >
              {icon}
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills