import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  Dropdown,
  Nav,
  Navbar as BootstrapNavbar,
  Container,
} from "react-bootstrap";

function Navbar() {
  return (
    <BootstrapNavbar
      expand="lg"
      style={{
        backgroundColor: "#f8f9fa",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
      className="fw-bold">
      <Container>
        <BootstrapNavbar.Brand href="/" className="fw-bold">
          Unique Projects
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="nav-link">
              Home
            </Nav.Link>
            <Dropdown
              as={motion.div}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}>
              <Dropdown.Toggle
                variant="transparent"
                id="projects-dropdown">
                Projects
              </Dropdown.Toggle>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Nav.Link
                      as={Link}
                      to="mini-projects"
                      smooth
                      className="nav-link"
                      duration={200}>
                      Mini Projects
                    </Nav.Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Nav.Link
                      as={Link}
                      to="major-projects"
                      smooth
                      className="nav-link"
                      duration={200}>
                      Major Projects
                    </Nav.Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </motion.div>
            </Dropdown>
            <Dropdown
              as={motion.div}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}>
              <Dropdown.Toggle
                variant="transparent"
                id="resources-dropdown">
                Connect With Us
              </Dropdown.Toggle>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}>
                <Dropdown.Menu>
                  <Dropdown.Item
                    href="https://www.youtube.com/@UniqueAppSites"
                    target="_blank">
                    Unique AppSites
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="https://tttttt.me/UniqueAppSitesOfficial"
                    target="_blank">
                    Telegram Group
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="https://t.me/AnubhavGoel01"
                    target="_blank">
                    Telegram Chat
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="https://www.linkedin.com/in/anubhav-goel-1206/"
                    target="_blank">
                    LinkedIn
                  </Dropdown.Item>
                </Dropdown.Menu>
              </motion.div>
            </Dropdown>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
