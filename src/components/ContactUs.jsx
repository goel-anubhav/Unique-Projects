import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to import Bootstrap CSS
import MailIcon from "@mui/icons-material/Mail";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function ContactUs() {
  return (
    <>
      <NavBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh", // Adjust the height to your preference
          padding: "20px",
        }}>
        <div
          className="d-grid gap-2"
          style={{
            width: "100%",
            maxWidth: "300px",
            textAlign: "center",
          }}>
          <Button
            href="mailto:uniqueappsites@gmail.com?subject=Contacting%20for%3A%20&body=Hey!!%20Unique%20Projects%0A%0AI'm%20----Name---%0A%0AI%20have%20the%20concern%20that%3A%20%0A%0A%0A%0AYours%20Sincerely%0A---Name---%0A--Email---%0A--Phone%20Number--%0A---Telegram%20Username--"
            target="_blank"
            variant="contained"
            startIcon={<MailIcon />}
            style={{
              backgroundColor: "#C71610",
              color: "white",
              marginBottom: "10px",
            }}>
            Mail
          </Button>
          <Button
            href="https://www.youtube.com/c/UniqueAppSites?sub_confirmation=1"
            target="_blank"
            variant="contained"
            startIcon={<YouTubeIcon />}
            style={{
              backgroundColor: "#FF0000",
              color: "white",
              marginBottom: "10px",
            }}>
            YouTube
          </Button>
          <Button
            href="https://github.com/goel-anubhav"
            target="_blank"
            variant="contained"
            startIcon={<GitHubIcon />}
            style={{
              backgroundColor: "#211F1F",
              color: "white",
              marginBottom: "10px",
            }}>
            GitHub
          </Button>
          <Button
            href="https://www.instagram.com/anubhav_goel1206/"
            target="_blank"
            variant="contained"
            startIcon={<InstagramIcon />}
            style={{
              backgroundColor: "#E1306C",
              color: "white",
              marginBottom: "10px",
            }}>
            Instagram
          </Button>
          <Button
            href="https://tttttt.me/UniqueAppSitesOfficial"
            target="_blank"
            variant="contained"
            startIcon={<TelegramIcon />}
            style={{
              backgroundColor: "#0088cc",
              color: "white",
              marginBottom: "10px",
            }}>
            Telegram Group
          </Button>
          <Button
            href="https://t.me/AnubhavGoel01"
            target="_blank"
            variant="contained"
            startIcon={<TelegramIcon />}
            style={{
              backgroundColor: "#0088cc",
              color: "white",
              marginBottom: "10px",
            }}>
            Telegram Chat
          </Button>
          <Button
            href="https://www.facebook.com/anubhav.goyal.121"
            target="_blank"
            variant="contained"
            startIcon={<FacebookIcon />}
            style={{
              backgroundColor: "#4267B2",
              color: "white",
              marginBottom: "10px",
            }}>
            Facebook
          </Button>
          <Button
            href="https://www.linkedin.com/in/anubhav-goel-1206/"
            target="_blank"
            variant="contained"
            startIcon={<LinkedInIcon />}
            style={{
              backgroundColor: "#0077B5",
              color: "white",
              marginBottom: "10px",
            }}>
            LinkedIn
          </Button>
          <Button
            href="https://x.com/AnubhavG12"
            target="_blank"
            variant="contained"
            style={{
              backgroundColor: "#000000",
              color: "white",
              marginBottom: "10px",
            }}>
            X
          </Button>
          {/* <Button
            href="#"
            variant="contained"
            style={{
              backgroundColor: "#FFA500",
              color: "white",
              marginBottom: "10px",
            }}>
            Threads
          </Button> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
