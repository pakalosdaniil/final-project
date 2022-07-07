import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div id="body">
      <div id="featured">
        <img src="images/the-beacon1.jpg" alt="" />
        <div>
          <h2>the beacon to all mankind</h2>
          <span>Our work is made with</span>
          <span>inspiration and passion, checked for quality</span>
          <span>and meticulousness for each detail</span>
          <br />
          <Link to={"/about"} className="more">
            read more
          </Link>
        </div>
      </div>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}>
        <Box
          className="homeBox"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          sx={{
            opacity: "0.8",
            transition: "0.5s ease-in-out",
            "&:hover": { opacity: 1, cursor: "pointer" },
          }}
          onClick={() => navigate("/shop")}>
          <img
            src="images/shop.jpg"
            alt=""
            style={{ border: "2px solid #1a1a1a" }}
          />
          <Typography className="tag"> shop</Typography>
        </Box>
        <Box
          className="homeBox"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          sx={{
            opacity: "0.8",
            transition: "0.5s ease-in-out",
            "&:hover": { opacity: 1, cursor: "pointer" },
          }}
          onClick={() => navigate("/team")}>
          <img
            src="images/team.jpg"
            alt=""
            style={{ border: "2px solid #1a1a1a" }}
          />
          <Typography className="tag"> crew</Typography>
        </Box>
        <Box
          className="homeBox"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          sx={{
            opacity: "0.8",
            transition: "0.5s ease-in-out",
            "&:hover": { opacity: 1, cursor: "pointer" },
          }}
          onClick={() => navigate("/careers")}>
          <img
            src="images/career.jpg"
            alt=""
            style={{ border: "2px solid #1a1a1a" }}
          />
          <Typography className="tag"> career</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Home;

// <ul>
//   <li>
//     <Link to={"/shop"}>
// <img src="images/shop.jpg" alt="" />
//       <span>shop</span>
//     </Link>
//   </li>
//   <li>
//     <Link to={"/team"}>
// <img src="images/team.jpg" alt="" />
//       <span>crew</span>
//     </Link>
//   </li>
//   <li>
//     <Link to={"/careers"}>
// <img src="images/career.jpg" alt="" />
//       <span>careers</span>
//     </Link>
//   </li>
// </ul>;
