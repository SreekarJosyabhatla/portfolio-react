import React from "react";
import "./Skills.css";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaRobot,
} from "react-icons/fa";
import { SiPostgresql, SiC } from "react-icons/si";
import { AiOutlineComment } from "react-icons/ai"; // Use this or any other suitable icon for NLP

const skillsData = [
  { name: "Python", icon: <FaPython />, group: "Programming" },
  { name: "Java", icon: <FaJava />, group: "Programming" },
  { name: "C", icon: <SiC />, group: "Programming" },
  { name: "HTML", icon: <FaHtml5 />, group: "Web" },
  { name: "CSS", icon: <FaCss3Alt />, group: "Web" },
  { name: "JavaScript", icon: <FaJs />, group: "Web" },
  { name: "React", icon: <FaReact />, group: "Web" },
  { name: "Node.js", icon: <FaNodeJs />, group: "Web" },
  { name: "SQL", icon: <FaDatabase />, group: "Database" },
  { name: "PostgreSQL", icon: <SiPostgresql />, group: "Database" },
  { name: "Machine Learning", icon: <FaRobot />, group: "ML" },
  { name: "NLP", icon: <AiOutlineComment />, group: "ML" },
];

const Skills = () => {
  // Group skills by their category
  const groupedSkills = skillsData.reduce((acc, skill) => {
    (acc[skill.group] = acc[skill.group] || []).push(skill);
    return acc;
  }, {});

  return (
    <section className="skills">
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="skills-content">
          {Object.keys(groupedSkills).map((group, index) => (
            <div key={index} className="skills-group">
              {groupedSkills[group].map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
