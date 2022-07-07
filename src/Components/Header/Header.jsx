import { Button, Container, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { Box } from "@mui/system";
import { authContext } from "../../Contexts/authContext";
import MenuList from "../MenuList/MenuList";

const Header = () => {
  const navigate = useNavigate();
  const { currentUser, admin } = useContext(authContext);

  return (
    <Box id="header">
      <Box className="logo">
        <Link to={"/"}>
          <img src="images/logo1.jpg" alt="" />
        </Link>
      </Box>

      <Toolbar>
        <Box className="ul">
          <Typography className="li" onClick={() => navigate("/")}>
            home
          </Typography>
          <Typography className="li" onClick={() => navigate("/about")}>
            about
          </Typography>
          <Typography className="li" onClick={() => navigate("/service")}>
            service
          </Typography>
          <Typography className="li" onClick={() => navigate("/contacts")}>
            contact
          </Typography>
          <Typography
            style={{ color: currentUser ? "#0ba39c" : "inherit" }}
            className="li"
            onClick={
              currentUser
                ? () => navigate("/profile")
                : () => navigate("/login")
            }>
            profile
          </Typography>
        </Box>
        <Box className="burger-menu">
          <MenuList style={{ height: "120px" }} />
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Header;

// className="selected"
