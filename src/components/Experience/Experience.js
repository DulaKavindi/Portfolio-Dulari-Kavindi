import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Heaven’sCode (PVT) LTD",
      duration: "6 months",
      date: "2026",
      description: [
        "Developed web applications using Angular and Spring Boot.",
        "Built REST APIs, worked with databases, and fixed application issues.",
      ],
      skills: ["Angular", "Spring Boot", "REST APIs", "Databases", "Web Applications"],
    },
    {
      role: "Testing Productive Associate",
      company: "GPV LANKA (PVT) LTD",
      duration: "10 months",
      date: "2022 – 2023",
      description: [
        "Performed testing and quality checks on electronic products.",
        "Identified defects and maintained testing records.",
      ],
      skills: ["Product Testing", "Quality Assurance", "Defect Tracking", "Electronic Products"],
    },
    {
      role: "NPI Assistant",
      company: "GPV LANKA (PVT) LTD",
      duration: "4 months",
      date: "2022 – 2023",
      description: [
        "Assisted in New Product Introduction (NPI) activities.",
        "Supported MES operations, testing, and documentation.",
      ],
      skills: ["NPI Support", "MES Operations", "Quality Testing", "Documentation"],
    },
  ];

  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Work <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          A timeline of my professional journey and hands-on industry experience.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "50px", paddingTop: "20px" }}>
          <Col md={10}>
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card-wrapper mb-4">
                <ExperienceCard
                  role={exp.role}
                  company={exp.company}
                  duration={exp.duration}
                  date={exp.date}
                  description={exp.description}
                  skills={exp.skills}
                />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;

