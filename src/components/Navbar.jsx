import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  BsHouseDoorFill,
  BsLaptop,
  BsChatDots,
  BsPeopleFill,
} from "react-icons/bs";

function ColorSchemesExample() {
  return (
    <>
      {/* Light Navbar */}
      <Navbar
        bg="light"
        expand="lg"
        style={{ backgroundColor: "#f8f9fa" }}>
        <Container fluid>
          <Navbar.Brand href="/" className="fw-bold">
            Unique Projects
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className="nav-link">
                <BsHouseDoorFill /> Home
              </Nav.Link>
              <Nav.Link href="#features" className="nav-link">
                <BsLaptop /> Mini Projects
              </Nav.Link>
              <Nav.Link href="#pricing" className="nav-link">
                <BsPeopleFill /> Major Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Dark Navbar */}
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="fw-bold"
        style={{
          backgroundColor: "#343a40",
          marginTop: "5px",
          animation: "fade-in 0.5s",
        }}>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link
                href="https://www.youtube.com/@UniqueAppSites"
                target="_blank"
                className="nav-link">
                <BsLaptop /> Unique AppSites
              </Nav.Link>
              <Nav.Link
                href="https://tttttt.me/UniqueAppSitesOfficial"
                target="_blank"
                className="nav-link">
                <BsChatDots /> Telegram Group
              </Nav.Link>
              <Nav.Link
                href="https://t.me/AnubhavGoel01"
                target="_blank"
                className="nav-link">
                <BsChatDots /> Telegram Chat
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/anubhav-goel-1206/"
                target="_blank"
                className="nav-link">
                <BsPeopleFill /> LinkedIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
