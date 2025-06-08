import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Jobhub from "../../Assets/Projects/Jobhub.png";
import MediBook from "../../Assets/Projects/MediBook.png";

import HETrading from "../../Assets/Projects/HE.Trading.png";

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
              imgPath={MediBook}
              isBlog={false}
              title="MediBook"
              description="This app has as role to facilitate booking of medical providers (doctors) by patients remotely. The key features of this app are still to be added to it but presently this is the MVP (Minimum Viable Product). Been developed as a group project it's main aim is to fulfill the medical facilaties in need "
              demoLink="http://www.bukers.fun:8000/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HETrading}
              isBlog={false}
              title="HE-Trading"
              description="HE-Trading web app showcases the advantages and the risque existing in trading where the app owner tried to allow users have access to his story and experience gotten since his debut in trading.Also enabling those interested to have access to his VIP charts or groups freely."
              demoLink="https://hommeequilibre-trading.onrender.com/Homme-Equilibr%C3%A9-Trading.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Jobhub}
              isBlog={false}
              title="Jobhud"
              description="Online app that will enable cameroonians get information about available Jobs,Scholarships,Concours,Internship,Call for projects and offer their services or try get the oppurtunity once they find what suit them. With great pleasure I could volunteer for this projects ."
              demoLink="https://www.cnjcjobhub.cm/en/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
