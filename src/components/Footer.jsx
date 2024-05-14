import React from "react";
import { MDBFooter, MDBContainer, MDBBtn, MDBIcon } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "#f1f1f1" }}
    >
      <MDBContainer className="pt-4">
        <section className="mb-4">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/anubhav.goyal.121"
            target="_blank"
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/AnubhavG12"
            target="_blank"
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>

          {/* Google */}
          <a
            href="https://www.youtube.com/@UniqueAppSites"
            target="_blank"
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            role="button"
          >
            <i className="fab fa-youtube"></i>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/anubhav_goel1206/"
            target="_blank"
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/anubhav-goel-1206/"
            target="_blank"
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          {/* Github */}
          <a
            href="ttps://github.com/goel-anubhav"
            target="_blank"
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#333333" }}
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
      </MDBContainer>

      <div
        className="text-center text-dark p-3"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          textDecoration: "none",
        }}
      >
        © 2024 Copyright:
        <a
          className="text-dark"
          href="https://www.youtube.com/@UniqueAppSites/"
          target="_blank"
        >
          &nbsp;Unique AppSites
        </a>
      </div>
    </MDBFooter>
  );
}
