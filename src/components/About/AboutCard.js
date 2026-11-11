import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    Hi everyone! I’m <span className="purple">Dulari Kavindi</span>{" "}
    from <span className="purple">Negombo, Sri Lanka</span>.
    <br />
    I’m a <span className="purple">motivated Information Technology undergraduate</span> at the{" "}
    <span className="purple">Institute of Technology, University of Moratuwa</span> with hands-on industry experience as a{" "}
    <span className="purple">Full-Stack Developer Intern</span>, contributing to enterprise-level web applications.
    <br />
    <br />
    I’m passionate about full-stack development and building responsive, secure, and scalable web solutions. I have worked extensively with modern technologies such as{" "}
    <span className="purple">
      Angular, Spring Boot, React, Node.js, Express, MySQL, PostgreSQL, and MongoDB
    </span>, as well as RESTful API development and database management.
    <br />
    <br />
    I enjoy applying clean code practices, Agile Scrum methodologies, and strong problem-solving skills in collaborative team environments. Beyond coding, I continuously explore new technologies, refine UI/UX experiences, and develop my technical and professional communication skills.
  </p>


          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dulari Kavindi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
