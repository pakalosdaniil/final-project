import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { teamContext } from "../../Contexts/teamContext";

const AddMemberForm = () => {
  const { createMember } = useContext(teamContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [memberPhoto, setMemberPhoto] = useState("");

  function handleValues() {
    let newMember = {
      name,
      lastName,
      bio,
      memberPhoto,
    };
    if (!name.trim() || !lastName.trim() || !bio.trim()) {
      alert("Use your power to fill all gaps");
      return;
    }
    createMember(newMember);
    navigate("/team");
  }

  return (
    <div id="body">
      <h1 className="label">
        <span>New Member</span>
      </h1>
      <Container maxWidth="sm">
        <Box
          paddingTop={"30px"}
          display={"flex"}
          flexDirection={"column"}
          textAlign={"center"}>
          <TextField
            value={name}
            onChange={e => setName(e.target.value)}
            style={{ margin: "10px" }}
            label="Name"
            variant="outlined"
          />
          <TextField
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            style={{ margin: "10px" }}
            label="Last Name"
            variant="outlined"
          />

          <TextField
            value={bio}
            onChange={e => setBio(e.target.value)}
            style={{ margin: "10px" }}
            label="Bio"
            variant="outlined"
          />

          <TextField
            value={memberPhoto}
            onChange={e => setMemberPhoto(e.target.value)}
            style={{ margin: "10px" }}
            id="input"
            label="Photo"
            variant="outlined"
          />

          <Button
            onClick={handleValues}
            style={{ margin: "10px" }}
            variant="contained"
            id="send">
            Add member
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default AddMemberForm;
