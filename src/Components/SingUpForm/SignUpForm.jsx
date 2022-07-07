import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { grey, yellow } from "@mui/material/colors";
import { authContext } from "../../Contexts/authContext";

const SignUpForm = () => {
  // const CssTextField = styled(TextField, {
  //   shouldForwardProp: props => props !== "focusColor",
  // })(p => ({
  //   // input label when focused
  //   "& label.Mui-focused": {
  //     color: p.focusColor,
  //   },
  //   "& .MuiOutlinedInput-root": {
  //     "&.Mui-focused fieldset": {
  //       borderColor: p.focusColor,
  //     },
  //   },
  // }));

  const { signUp, error, setError } = useContext(authContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleValues() {
    signUp(email, password);
    {
      if (!email || !password) {
        alert("Please fill all fields");
        return;
      }
    }
    signUp(email, password, navigate("/about"));
  }
  return (
    <div id="body">
      <h1 className="label">
        <span>sign up</span>
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
            focusColor="#0ba39c"
          />

          <TextField
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: "60%", margin: "10px" }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            focusColor="#0ba39c"
          />

          <Button
            onClick={handleValues}
            style={{ width: "60%", margin: "10px" }}
            variant="contained"
            id="send">
            Sign Up
          </Button>

          <Typography variant="p" component="h4" marginTop={"40px"}>
            Have you already registered?{" "}
          </Typography>
          <Typography
            onClick={() => {
              navigate("/login");
              setError("");
            }}
            variant="p"
            component="h4"
            style={{ textDecoration: "none", cursor: "pointer" }}
            sx={{
              color: "#0ba39c",
              "&:hover": { color: "#252525" },
            }}
            marginTop="10px">
            Log in here
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default SignUpForm;
