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
        <h3>We Have Free Templates for Everyone</h3>
        <p>
          Our website templates are created with inspiration, checked for
          quality and originality and meticulously sliced and coded. What’s
          more, they’re absolutely free! You can do a lot with them. You can
          modify them. You can use them to design websites for clients, so long
          as you agree with the{" "}
        </p>
        <h3>We Have More Templates for You</h3>
      </Container>
    </div>
  );
};

export default About;
