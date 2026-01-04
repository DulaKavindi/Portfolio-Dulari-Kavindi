import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ageC from "../../Assets/Projects/age-calculator.png";
import calculator from "../../Assets/Projects/calculator.png";
import expense from "../../Assets/Projects/expense-tracker.png";
import finalProject from "../../Assets/Projects/final-project.png";
import ToDo from "../../Assets/Projects/ToDo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finalProject}
              isBlog={false}
              title="Smart Garment production optimization and tracking system"
              description="This university final-year project, titled Smart Garment Tracking and Optimization System, is designed to support garment factories by enabling real-time production monitoring using RFID technology, employee productivity tracking, quality defect management, and analytical reporting to enhance operational efficiency and decision-making."
              technologies="React.js, Node.js, MongoDB, RFID"
              ghLink="https://github.com/SasinduV0/SGPTOS-FinalProject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ageC}
              isBlog={false}
              title="Age Calculator"
              description="A responsive React app that calculates a person's exact age in years, months, and days from their date of birth, with form validation and a clean, user-friendly interface."
              technologies="React, JavaScript, Tailwind CSS, Vite"
              ghLink="https://github.com/DulaKavindi/CodeAlpha_Age_Calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Personal Expense Tracker"
              description="A full-stack web application that allows users to securely record and categorize daily expenses, visualize spending through interactive dashboards, apply filters by date and category, and customize budget limits. The system supports data-driven financial decisions by offering clear insights into spending behavior and budget performance."
              technologies="React, Node.js, postgresql"
              ghLink="https://github.com/DulaKavindi/Personal-Expense-Tracker"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Simple Calculator"
              description="A simple calculator project created to practice modern programming languages by implementing core arithmetic operations such as addition, subtraction, multiplication, and division."
              technologies="React.js"
              ghLink="https://github.com/DulaKavindi/Simple-Calculator"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDo}
              isBlog={false}
              title="Simple ToDo List"
              description="The Simple To-Do List is a basic app that helps users add, view and delete daily tasks. It is easy to use and helps keep tasks organized in one place."
              technologies="React.js"
              ghLink="https://github.com/DulaKavindi/Simple_ToDoList"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
