import { grey } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../../App.css";

import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Footer = () => {
  return (
    <div id="footer">
      <Typography
        style={{
          color: "#fff",
        }}>
        &copy; 2023 by Mustachos. All rights reserved.
      </Typography>
      <Box display={"flex"}>
        <Button>
          <TwitterIcon
            sx={{
              color: grey[400],
              transition: "0.2s ease-in-out",
              "&:hover": { color: grey[50] },
            }}
          />
        </Button>
        <Button>
          <FacebookIcon
            sx={{
              color: grey[400],
              transition: "0.2s ease-in-out",
              "&:hover": { color: grey[50] },
            }}
          />
        </Button>
        <Button>
          <InstagramIcon
            sx={{
              color: grey[400],
              transition: "0.2s ease-in-out",
              "&:hover": { color: grey[50] },
            }}
          />
        </Button>
      </Box>
    </div>
  );
};

export default Footer;
