import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";

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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}>
              Welcome To Unique Projects By
            </motion.h2>{" "}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}>
              <a
                href="https://youtube.com/c/@uniqueappsites"
                style={{ color: "white", textDecoration: "none" }}>
                <b>
                  <i>Unique AppSites</i>
                </b>
              </a>
            </motion.h2>
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}>
              Why Us?
            </motion.h2>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}>
              We Are:{" "}
              <i>Hassle Free, Affordable, Reliable, Supportive</i>
            </motion.h4>
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}>
              What we offer?
            </motion.h2>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}>
              We just don't offer project, we offer:&nbsp;{" "}
              <i>
                Project Documentation, Installation support and Many
                more.....
              </i>
            </motion.h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SlideShow;
