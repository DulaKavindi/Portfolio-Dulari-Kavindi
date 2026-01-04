import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    Hi everyone! I’m <span className="purple">Dulari Kavindi</span>{" "}
    from <span className="purple">Negombo, Sri Lanka</span>.
    <br />
    I’m a <span className="purple">motivated IT undergraduate</span> at the{" "}
    <span className="purple">Institute of Technology, University of Moratuwa</span>,
    currently in my second year.
    <br />
    I’m passionate about{" "}
    <span className="purple">full-stack and frontend web development</span>, with
    hands-on experience in building responsive, secure, and user-friendly web
    applications using modern technologies.
    <br />
    <br />
    I have worked with technologies such as{" "}
    <span className="purple">
      JavaScript, React, Node.js, Express, PostgreSQL, and MongoDB
    </span>, and I enjoy applying clean code practices, Agile Scrum methods, and
    problem-solving skills in real-world projects.
    <br />
    <br />
    Beyond coding, I enjoy learning new technologies, improving my UI/UX skills,
    collaborating in teams, and continuously developing both my technical and
    professional communication skills.
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
