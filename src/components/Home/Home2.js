import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textAlign: "center" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m an <span className="purple">IT undergraduate</span> and{" "}
              <span className="purple">Full-Stack Developer</span> who loves turning complex ideas
              into practical, secure, and user-friendly web applications. With hands-on industry internship experience, I have developed a strong passion for building clean, scalable, and high-performance digital solutions.
              <br />
              <br />
              I’m proficient across both frontend and backend stacks, working with
              <i>
                <b className="purple">
                  {" "}
                  Java, Spring Boot, Angular, TypeScript, JavaScript, React.js, Node.js, and SQL/MongoDB{" "}
                </b>
              </i>
              to build seamless end-to-end applications.
              <br />
              <br />
              My key areas of interest include architecting
              <i>
                <b className="purple">
                  {" "}
                  Full-Stack Web Applications, Responsive User Interfaces,{" "}
                </b>
              </i>
              and designing secure, scalable
              <i>
                <b className="purple"> RESTful APIs &amp; Secure Authentication Systems</b>
              </i>
              .
              <br />
              <br />
              Whenever possible, I love engineering systems using
              <b className="purple"> Spring Boot &amp; Angular </b> as well as modern JavaScript stacks like{" "}
              <i>
                <b className="purple">React.js &amp; Node.js</b>
              </i>
              , always focusing on performance, security, and clean code practices.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
