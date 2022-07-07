import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleAuthForm from "../Authorization/Google/GoogleAuthForm";
import { authContext } from "../../Contexts/authContext";

const LogInForm = () => {
  const { logIn, error, setError } = useContext(authContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleValues() {
    if (!email || !password) {
      alert("Please fill all the fields");
      return;
    }
    logIn(email, password, navigate);
  }

  return (
    <div id="body">
      <h1 className="label">
        <span>Login</span>
      </h1>
      <Container maxWidth="md">
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent="center"
          height={"40vh"}>
          {error ? <Alert severity="error">{error}</Alert> : null}

          <TextField
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: "60%", margin: "10px" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />

          <TextField
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: "60%", margin: "10px" }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />

          <Button
            onClick={handleValues}
            style={{ width: "60%", margin: "10px" }}
            variant="contained"
            id="send">
            Log In
          </Button>

          <Box display={"flex"} margin={"0 auto"}>
            <Button>
              <GoogleAuthForm />
            </Button>
            <Button>
              <FacebookIcon sx={{ fontSize: 40, color: grey[800] }} />
            </Button>
            <Button>
              <AppleIcon sx={{ fontSize: 40, color: grey[800] }} />
            </Button>
          </Box>

          <Typography variant="p" component="h4">
            Have you already registered?{" "}
          </Typography>
          <Typography
            onClick={() => {
              navigate("/signup");
              setError("");
            }}
            variant="p"
            component="h4"
            style={{ textDecoration: "none", cursor: "pointer" }}
            sx={{
              color: "#0ba39c",
              "&:hover": { color: "#252525" },
            }}
            marginTop="8px">
            Sign up here
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default LogInForm;
