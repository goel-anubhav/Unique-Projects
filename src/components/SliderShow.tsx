import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function SlideShow() {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('/MainBG.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}></div>
      <Carousel
        prevIcon={<BsChevronLeft style={{ color: "black" }} />}
        nextIcon={<BsChevronRight style={{ color: "black" }} />}
        prevLabel=""
        nextLabel=""
        indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Main.png"
            alt="First slide"
            style={{ objectFit: "cover", height: "400px" }}
          />
          <Carousel.Caption
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              color: "white",
              padding: "20px",
              paddingTop: "40px",
            }}>
            <h3>Welcome To Unique Projects By</h3>{" "}
            <h3>
              <a
                href="#"
                style={{ color: "white", textDecoration: "none" }}>
                Unique AppSites
              </a>
            </h3>
            <p>
              A place to buy the projects you want in the most{" "}
              <i>
                <b>Cheap</b> &nbsp;
              </i>
              prices with installation guidance and guaranteed running
              project
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Main2.png"
            alt="Second slide"
            style={{ objectFit: "cover", height: "400px" }}
          />
          <Carousel.Caption
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              color: "white",
              padding: "20px",
            }}>
            <h3>Want Mini Projects?</h3>
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginTop: "10px" }}>
              Click Here For Mini Projects
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Main3.png"
            alt="Third slide"
            style={{ objectFit: "cover", height: "400px" }}
          />
          <Carousel.Caption
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              color: "white",
              padding: "20px",
            }}>
            <h3>Want Major Projects?</h3>
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginTop: "10px" }}>
              Click Here For Major Projects
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SlideShow;
