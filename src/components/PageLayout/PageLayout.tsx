import React, { useEffect } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router";

function PageLayout() {
  const location = useLocation();
  console.log(location.state);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      <Navbar />
      <Container>
        <h1 style={{ textAlign: "center" }}>
          {location.state.data.name}
        </h1>
      </Container>
      <Container>
        <div
          style={{
            textAlign: "center",
            width: "80%",
            borderBottom: "2px solid yellow",
            margin: "20px auto",
          }}
        />
      </Container>
      <Container className="d-flex justify-content-center align-items-center">
        <img
          src="data:image/png;base64,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"
          width="300px"
          height="300px"
          alt="digital product"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Container>
      <Container>
        <div
          style={{
            width: "80%",
            borderBottom: "2px solid yellow",
            margin: "20px auto",
          }}
        />
      </Container>
      <Container>
        <h3>Product Description:</h3>
        <h5>
          <p style={{ textAlign: "justify" }}>
            {location.state.data.description}
          </p>
        </h5>
      </Container>
      <Container>
        <div
          style={{
            textAlign: "center",
            width: "80%",
            borderBottom: "2px solid yellow",
            margin: "20px auto",
          }}
        />
      </Container>
      <Container>
        <h4>Guarantee or Assurance:</h4>
        <h5 style={{ textAlign: "justify" }}>
          We will make sure that the project will be successfully
          installed and work on your PC. For that, we will provide
          guidance via Google Meet. You just need to purchase and send
          us an email with the payment screenshot, transaction ID, and
          the preferred time and date to schedule the meeting.
        </h5>
      </Container>
      <Container>
        <div
          style={{
            textAlign: "center",
            width: "80%",
            borderBottom: "2px solid yellow",
            margin: "20px auto",
          }}
        />
      </Container>
      <Container style={{ textAlign: "center", marginTop: "40px" }}>
        <h4
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}>
          <span style={{ marginBottom: "5px" }}>
            Price: {location.state.data.price}
            <span style={{ fontSize: "small" }}>
              (excluding taxes)
            </span>
          </span>
        </h4>
        <h5>
          <Button variant="primary" style={{ marginTop: "10px" }}>
            Make Payment
          </Button>
        </h5>
      </Container>

      <Container>
        <div
          style={{
            textAlign: "center",
            width: "80%",
            borderBottom: "2px solid yellow",
            margin: "20px auto",
          }}
        />
      </Container>
      <Container style={{ textAlign: "center", marginTop: "40px" }}>
        <Button
          variant="primary"
          style={{ maxWidth: "300px", margin: "0 auto" }}>
          <h5>
            <a
              href="mailto:uniqueappsites@gmail.com?subject=I%20have%20Purchased%20the%20%3CProject%20Name%3E%2C%20Schedule%20my%20meeting&body=Hello%20Unique%20AppSites.%0AI'm%20%3CYour%20Name%3E%0A%0AI%20have%20recently%20purchased%20%3CProject%20Name%3E%0A%0AFor%20Verification%3A%0A%0APayment%20Reference%20Number%3A%0ADate%3A%0ATime%3A%0AAmount%3A%0A%0A%0AFor%20Scheduling%20Installation%20Meeting%3A%0A%0ATime%3A%0ADate%3A%0AEmail%3A%0APhone%20Number%3A%0A%0AThank%20You%20%0A%0AYours%20Sincerely%0A%3CYour%20Name%3E"
              style={{ color: "white", textDecoration: "none" }}>
              Mail And Schedule Meeting
            </a>
          </h5>
        </Button>
      </Container>

      <Container>
        <div
          style={{
            textAlign: "center",
            width: "80%",
            borderBottom: "2px solid yellow",
            margin: "20px auto",
          }}
        />
      </Container>
      <Container style={{ textAlign: "center", marginTop: "40px" }}>
        <h3> Don't Forget To Like, Share & Subscribe</h3>&nbsp;
        <Container
          style={{ textAlign: "center", marginBottom: "40px" }}>
          <Button
            variant="primary"
            style={{
              maxWidth: "300px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <img
              src="https://www.iconpacks.net/icons/1/free-icon-youtube-141.png"
              alt="YouTube Icon"
              style={{ width: "24px", marginRight: "10px" }}
            />
            <a
              href="https://www.youtube.com/@UniqueAppSites"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}>
              Unique AppSites
            </a>
          </Button>
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default PageLayout;
