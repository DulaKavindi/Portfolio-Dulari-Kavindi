import React from "react";
import Card from "react-bootstrap/Card";
import { BsBriefcase, BsBuilding, BsCalendar3 } from "react-icons/bs";
import { ImPointRight } from "react-icons/im";

function ExperienceCard({
  role,
  company,
  duration,
  date,
  description,
  skills,
}) {
  return (
    <Card className="experience-card-view">
      <Card.Body>
        <div className="experience-card-header d-flex flex-wrap justify-content-between align-items-center mb-3">
          <div>
            <Card.Title className="experience-role mb-1">
              <BsBriefcase className="purple me-2" style={{ marginBottom: "3px" }} />
              {role}
            </Card.Title>
            <div className="experience-company">
              <BsBuilding className="me-1 purple" style={{ marginBottom: "2px" }} />
              <strong style={{ color: "#d8b4e2" }}>{company}</strong>
            </div>
          </div>
          <div className="experience-meta mt-2 mt-md-0">
            <span className="experience-badge duration-badge me-2">
              {duration}
            </span>
            <span className="experience-badge date-badge">
              <BsCalendar3 className="me-1" style={{ marginBottom: "2px" }} />
              {date}
            </span>
          </div>
        </div>

        <ul className="experience-points">
          {description.map((point, index) => (
            <li key={index} className="experience-point-item">
              <ImPointRight className="purple point-icon me-2" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {skills && skills.length > 0 && (
          <div className="experience-tags mt-3 pt-2">
            {skills.map((skill, index) => (
              <span key={index} className="experience-tag">
                {skill}
              </span>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;

