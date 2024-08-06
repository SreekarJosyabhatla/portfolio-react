import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience">
      <div className="experience-container">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Software Engineer Intern</h3>
              <h4>CloudSire Solutions LLP</h4>
              <span>June 2024 – Present</span>
              <p>
                Developed and implemented 5 automated workflows using Workato to
                integrate AP automation platforms like Xero and Salesforce,
                resulting in a 30% increase in efficiency, and configured 50+
                email triggers for receiving AP bills, cutting manual effort by
                40%.
                <br />
                Automated vendor verification and onboarding processes through
                Salesforce, accelerating approval times by 25% and facilitating
                documentation requests for 20+ new vendors.
              </p>
            </div>
          </div>
          {/* Add more timeline items here */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
