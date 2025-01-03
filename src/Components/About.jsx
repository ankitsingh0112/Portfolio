import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-sm lg:text-xl mt-8 lg:mt-14">
        Hello, I'm Ankit a final-year student studying Computer Science and Engineering with a passion for web development. I excel in both frontend and backend technologies, making me well-rounded in creating comprehensive web solutions.
        </p>

        <br />

        <p className="text-sm lg:text-xl">
        I have a strong foundation in both frontend and backend development. On the frontend, I’ve worked extensively with HTML, CSS, and JavaScript, along with modern frameworks and libraries like Tailwind CSS and ReactJS. On the backend, I’m skilled in Java and Spring Boot, with experience in tools like Hibernate, Swagger, Postman, and Spring Security. Apart from my technical skills I also have a strong academic background, with a CGPA of 8.77.
        </p>
        <br />
        <p className="text-sm lg:text-xl">
        I'm always eager to learn and stay updated with the latest advancements in technology. When I work on a project, I focus on creating user-friendly interfaces while ensuring robust functionality behind the scenes. I like solving problems and making things that people like to use.
        </p>
      </div>
    </div>
  );
};

export default About;