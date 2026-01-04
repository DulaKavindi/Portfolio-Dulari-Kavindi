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
  I’m an <span className="purple">IT undergraduate</span> who loves turning ideas
  into practical, user-friendly, and reliable web applications. Over time,
  I’ve explored multiple technologies and discovered a strong passion for
  building clean, responsive, and efficient digital solutions.
  <br />
  <br />
  I’m proficient in
  <i>
    <b className="purple">
      {" "}
      JavaScript, Java, HTML, CSS, React.js and Node.js{" "}
    </b>
  </i>
  and enjoy working across both frontend and backend development.
  <br />
  <br />
  My key areas of interest include developing
  <i>
    <b className="purple">
      {" "}
      Full-Stack Web Applications, Responsive User Interfaces,{" "}
    </b>
  </i>
  and secure, scalable RESTful APIs.
  <br />
  <br />
  Whenever possible, I love building projects with
  <b className="purple"> Node.js </b> and modern frontend libraries like{" "}
  <i>
    <b className="purple">React.js</b>
  </i>
  , focusing on performance, usability, and clean code practices.
</p>

          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
