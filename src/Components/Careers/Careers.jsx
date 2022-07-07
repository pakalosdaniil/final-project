import { Box, Button, Container, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const Careers = theme => {
  const CssTextField = styled(TextField, {
    shouldForwardProp: props => props !== "focusColor",
  })(p => ({
    "& label.Mui-focused": {
      color: p.focusColor,
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: p.focusColor,
      },
    },
  }));

  return (
    <div id="body">
      <h1 className="label">
        <span>join us</span>
      </h1>
      <Container maxWidth="sm">
        <Box
          padding={"30px"}
          display={"flex"}
          flexDirection={"column"}
          textAlign={"center"}>
          <CssTextField
            style={{ margin: "10px" }}
            id="input"
            label="Name"
            variant="outlined"
            focusColor="#0ba39c"
          />

          <CssTextField
            style={{ margin: "10px" }}
            id="input"
            label="Last Name"
            variant="outlined"
            focusColor="#0ba39c"
          />

          <CssTextField
            style={{ margin: "10px" }}
            id="input"
            label="Email"
            variant="outlined"
            focusColor="#0ba39c"
          />

          <CssTextField
            style={{ margin: "10px" }}
            id="input"
            label="Phone"
            variant="outlined"
            focusColor="#0ba39c"
          />
          <CssTextField
            style={{ margin: "10px" }}
            variant="outlined"
            multiple
            type="file"
            focusColor="#0ba39c"
          />
          <label for="avatar">Choose a profile picture:</label>

          <input
            type="file"
            id="avatar"
            name="avatar"
            style={{ display: "none" }}
            accept="image/png, image/jpeg"
          />

          <Button
            id="send"
            style={{ height: "65px", margin: "10px" }}
            variant="contained">
            send
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Careers;
