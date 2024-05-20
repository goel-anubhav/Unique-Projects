import React from "react";
import styled from "styled-components";

const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  background-color: ${(props) => props.bgColor || "#007bff"};
  color: black; /* Set the text color to black */
  border: none;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  max-width: 300px;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#0056b3"};
    text-decoration: none; /* Remove underline on hover */
  }

  &:not(:last-child) {
    margin-bottom: 15px; /* Increase the gap between buttons */
  }
`;

const Icon = styled.img`
  width: 24px; /* Increase the size of the icons */
  height: 24px;
  margin-right: 10px;
`;

const ContactUsPage = () => {
  return (
    <ContactUsContainer>
      <Title>Contact Us</Title>
      <Button href="mailto:youremail@example.com">
        <Icon src="/mail-icon.svg" alt="Mail" />
        Write Me a Mail
      </Button>
      <Button
        href="https://t.me/yourtelegramusername"
        bgColor="#0088cc"
        hoverColor="#0071a4"
      >
        <Icon src="/telegram-icon.svg" alt="Telegram" />
        Write Me a Message (Telegram)
      </Button>
      <Button
        href="https://instagram.com/yourinstagramusername"
        bgColor="#e4405f"
        hoverColor="#b02844"
      >
        <Icon src="/instagram-icon.svg" alt="Instagram" />
        Write Me a Message (Instagram)
      </Button>
      <Button
        href="https://www.youtube.com/channel/yourchannelid"
        bgColor="#ff0000"
        hoverColor="#cc0000"
      >
        <Icon src="/youtube-icon.svg" alt="YouTube" />
        Subscribe Us on YouTube
      </Button>
    </ContactUsContainer>
  );
};

export default ContactUsPage;
