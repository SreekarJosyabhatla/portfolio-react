import React from "react";
import "./Projects.css";
import p1 from "../assets/p1.jpeg";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.jpeg";

const projects = [
  {
    title: "Chatroom using Node.js",
    description:
      "A chatroom application built with Node.js, allowing multiple users to connect and communicate simultaneously.",
    image: p1,
    link: "https://github.com/SreekarJosyabhatla/WhisperHub",
  },
  {
    title: "Text- Based Search Engine",
    description:
      "A text-based file search engine that efficiently locates and retrieves documents based on user-defined search queries.",
    image: p2,
    link: "https://github.com/SreekarJosyabhatla/File-Search",
  },
  {
    title: "Sentiment Analysis on IMDb Movie Reviews",
    description:
      "A sentiment analysis tool for IMDb movie reviews that classifies and visualizes the sentiment of user-generated movie feedback.",
    image: p3,
    link: "https://github.com/SreekarJosyabhatla/Sentiment-Analysis",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-heading">
        <h2>Projects</h2>
        <div className="underline"></div>
      </div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="project-link"
          >
            <div className={`project ${index % 2 === 0 ? "reverse" : ""}`}>
              <div className="project-description">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
