import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath && (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      )}
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-1">
          <Card.Title className="mb-0">{props.title}</Card.Title>
          {props.isOngoing && (
            <span
              style={{
                fontSize: "0.75em",
                backgroundColor: "rgba(46, 213, 115, 0.18)",
                color: "#2ed573",
                border: "1px solid rgba(46, 213, 115, 0.45)",
                borderRadius: "12px",
                padding: "2px 10px",
                fontWeight: "600",
                whiteSpace: "nowrap",
                marginLeft: "8px",
              }}
            >
              ● Ongoing
            </span>
          )}
        </div>
        {props.subtitle && (
          <h6
            className="purple"
            style={{
              fontSize: "0.92em",
              fontWeight: "600",
              marginTop: "4px",
              marginBottom: "12px",
            }}
          >
            {props.subtitle}
          </h6>
        )}
        <Card.Text style={{ textAlign: "justify", flexGrow: 1 }}>
          {props.description}
        </Card.Text>

        {props.technologies && (
          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            <strong style={{ color: "#c770f0" }}>Technologies: </strong>
            <span style={{ color: "#ddd" }}>{props.technologies}</span>
          </div>
        )}

        {(props.ghLink || props.demoLink) && (
          <div style={{ marginTop: "auto" }}>
            {props.ghLink && (
              <Button variant="primary" href={props.ghLink} target="_blank">
                <BsGithub /> &nbsp;
                {props.isBlog ? "Blog" : "GitHub"}
              </Button>
            )}

            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                style={{ marginLeft: props.ghLink ? "10px" : "0" }}
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            )}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
