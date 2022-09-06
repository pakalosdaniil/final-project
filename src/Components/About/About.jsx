import { Box, Container, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div id="body">
      <h1 className="label">
        <span>mustachos started</span>
      </h1>
      <Container maxWidth="md">
        <Box className="about-image">
          <img src="images/about-us.jpg" alt="" />
        </Box>
        <h3>We are Specialised in Grooming Men</h3>
        <p>
          Our barbershop is one of the first few brands in town to offer an
          exclusive grooming experience for men, from shaving to haircuts,
          massages and ear-cleaning services. This place aims to evoke a sence
          of nostalgia in men. This is where men would gather to discuss
          everything from business to sports to current affairs, while enjoying
          the pleasures of professional men grooming service.
        </p>
        <h3>It's not an haircut. It's an experience.</h3>
      </Container>
    </div>
  );
};

export default About;
