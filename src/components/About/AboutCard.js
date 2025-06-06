import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chomoh Zidane </span>
            Currently a Freelancer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating designs with Figma
            </li>
            <li className="about-activity">
              <ImPointRight />
              Playing Football
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Coding becomes a passion when considered as a point of
            entertainment"{" "}
          </p>
          <footer className="blockquote-footer">Zidane</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
