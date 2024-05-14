import React from "react";
import Carousel from "react-bootstrap/Carousel";

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
          backgroundImage: `url('path_to_your_background_image.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}></div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "400px" }}
            src="https://img.freepik.com/free-photo/education-day-arrangement-table-with-copy-space_23-2148721266.jpg"
            alt="First slide"
          />
          <Carousel.Caption
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              color: "white",
              padding: "20px",
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
            style={{ width: "100%", height: "400px" }}
            src="https://thumbs.dreamstime.com/b/education-study-books-high-school-university-16383080.jpg"
            alt="Second slide"
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
            style={{ width: "100%", height: "400px" }}
            src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?cs=srgb&dl=pexels-pixabay-159866.jpg&fm=jpg"
            alt="Third slide"
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
