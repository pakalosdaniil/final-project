import { Box, Button, Container } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../Contexts/authContext";

const Profile = () => {
  const { admin, logOut } = useContext(authContext);
  const navigate = useNavigate();
  return (
    <>
      {admin ? (
        <Container>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}>
            <Button
              style={{ width: "30%", height: "65px" }}
              variant="contained"
              id="add-button">
              {admin ? "admin" : "user"} Settings
            </Button>
          </Box>
        </Container>
      ) : (
        <>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}>
            <Button
              onClick={() => navigate("/cart")}
              style={{ width: "30%", height: "65px" }}
              variant="contained"
              id="add-button">
              Cart
            </Button>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}>
            <Button
              // onClick={() => navigate("/add-member")}
              style={{ width: "30%", height: "65px" }}
              variant="contained"
              id="add-button">
              Favorites
            </Button>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}>
            <Button
              // onClick={() => navigate("/")}
              style={{ width: "30%", height: "65px" }}
              variant="contained"
              id="add-button">
              {admin ? "admin" : "user"} Settings
            </Button>
          </Box>
        </>
      )}
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}>
        <Button
          onClick={() => {
            logOut();
            navigate("/");
          }}
          style={{ width: "30%", height: "65px" }}
          variant="contained"
          id="add-button">
          Logout
        </Button>
      </Box>
    </>
  );
};

export default Profile;
