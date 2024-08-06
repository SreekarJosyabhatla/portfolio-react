import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <div className="about-text about-text1">
            <p>
              As a 4th-year Computer Science and Engineering student
              specializing in AI and Machine Learning at GITAM University, I
              have developed strong skills in Python and Java. My academic
              journey has given me a solid foundation in data structures,
              algorithms, and software design, with practical experience in
              mobile development, distributed systems, and natural language
              processing.
            </p>
          </div>
          <div className="about-text about-text2">
            <p>
              Passionate about Machine Learning, I am seeking internship
              opportunities to gain hands-on experience and build my
              professional network. I aim to work on innovative projects,
              collaborate with experienced professionals, and contribute to
              cutting-edge developments. My goal is to leverage my academic
              background and technical expertise to grow as a proficient and
              versatile software engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
