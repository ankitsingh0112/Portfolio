import React from 'react'
import PMS from '/png/PMS.png'
import blog from '/png/blog.png'
import ecom from '/png/ecom.png'
import zapvi from '/png/zapvi.png'
import { MdLiveTv } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
    const projects = [
        {
          id: 1,
          src: PMS,
          title:"Project Management System",
          description:
      "Project Management System, which is a comprehensive platform developed with Spring Boot for the backend and React for the frontend. This system enhances project tracking, promotes team collaboration, and manages tasks efficiently. It incorporates Razorpay to enable seamless payment processing, thereby ensuring smooth financial transactions for subscription plans within the platform. Engineered for both usability and scalability, it effectively optimizes project workflows.",
      tags: [
        "React Js",
        "Redux",
        "Tailwind",
        "Shadcn UI",
        "Java",
        "Spring Boot",
        "MySQL",
      ],
      github: "https://github.com/ankitsingh0112/Project-Management-System-frontend",
    webapp: "https://project-management-system-by-ankit.vercel.app/",
    
        },
        {
          id: 2,
          src: blog,
          title:"Backend APIs for a Blogging Website",
          description:
      "The backend of the Blogging Website, developed with Spring Boot, offers powerful tools for handling blogs, users, comments, and authentication processes. It utilizes Spring Data JPA for smooth database interactions, Spring Security for improved security measures, and Swagger for clear API documentation. Built with scalability and efficiency in mind, it guarantees an enhanced blogging experience, catering to the needs of both creators and readers.",
      tags: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Swagger",
        "MySQL",
      ],
      github: "https://github.com/ankitsingh0112/Blogging-App-APIs",
    webapp: "https://github.com/ankitsingh0112/Blogging-App-APIs",
        },
        {
          id: 3,
          src: ecom,
          title:"E-Commerce Website",
          description:
      "The E-commerce Website, developed using HTML, CSS, Tailwind CSS, Java, Hibernate, Servlets, JSP, and MySQL, offers a seamless online shopping experience. It includes user-friendly features like product browsing, cart management, and order processing. Additionally, a dedicated admin panel enables efficient product and user management, ensuring smooth operations and scalability for an optimized e-commerce platform.",
      tags: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Java",
        "Hibernate",
        "Servlets",
        "JSP",
        "MySQL",
      ],
      github: "https://github.com/ankitsingh0112/E-commerce-Website",
    webapp: "https://github.com/ankitsingh0112/E-commerce-Website",
        },
        {
          id: 4,
          src: zapvi,
          title:"Zapvi Website - Redesigned",
          description:
      "The redesigned Zapvi website blends modern design with smooth animations to create a dynamic and engaging user experience. Built for the Reimagine Hackathon, it features an intuitive interface, responsive layout, and interactive elements. The added animations enhance visual appeal while ensuring seamless navigation, making the website both functional and aesthetically captivating.",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "GSAP",
      ],
      github: "https://github.com/ankitsingh0112/-Semicolon-ReimagineRound1",
    webapp: "https://semicolon-reimagine-round1.vercel.app/",
        },
      ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-20">
        <div className="pb-8">
        <p className='font-semibold text-gray-400 text-lg'>MY WORK</p>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, description, tags, github, webapp }) => (
            <div key={id} className="shadow-sm shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 mb-2"
              />
              {
                tags && tags.length > 0 && (
                    <div className='px-2'>
                      {tags.map((tag, ind) => (
                        <button className="tags" key={ind}>
                          {tag}
                        </button>
                      ))}
                    </div>
                )
              }
              <p className='px-3'>{description}</p>
              <div className="flex items-center justify-center">
                <a href={webapp} target='_blank' className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 flex items-center justify-center border border-gray-600 rounded-md gap-3 hover:bg-blue-400">
                <MdLiveTv size={25}/>
                Demo
                </a>
                <a href={github} target='_blank' className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 flex items-center justify-center border border-gray-600 rounded-md gap-3 hover:bg-green-400">
                <FaGithub size={25}/>
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects