import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample() {
  return (
    <>
      {/* Light Navbar */}
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="http://localhost:5173/">
            Unique Projects
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="http://localhost:5173/">Home</Nav.Link>
              <Nav.Link href="#features">Mini Projects</Nav.Link>
              <Nav.Link href="#pricing">Major Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Dark Navbar */}
      <Navbar
        bg="warning"
        expand="lg"
        className="fw-bold"
        style={{ marginTop: "5px" }}
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link
                href="https://www.youtube.com/@UniqueAppSites"
                target="_blank"
                className="text-light fs-md"
              >
                Unique AppSites
              </Nav.Link>
              <Nav.Link
                href="https://tttttt.me/UniqueAppSitesOfficial"
                target="_blank"
                className="text-light fs-md"
              >
                Telegram Group
              </Nav.Link>
              <Nav.Link
                href="https://t.me/AnubhavGoel01"
                target="_blank"
                className="text-light fs-md"
              >
                Telegram Chat
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/anubhav-goel-1206/"
                target="_blank"
                className="text-light fs-md"
              >
                LinkedIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
