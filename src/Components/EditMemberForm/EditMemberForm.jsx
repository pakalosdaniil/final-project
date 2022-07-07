import { Box, Button, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { teamContext } from "../../Contexts/teamContext";

const EditMemberForm = () => {
  const { getOneMember, oneMember, updatedMember } = useContext(teamContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [memberPhoto, setMemberPhoto] = useState("");

  function handleValues() {
    let editedMember = {
      name,
      lastName,
      bio,
    };
    if (!name.trim() || !lastName.trim() || !bio.trim()) {
      alert("Use your power to fill all gaps");
      return;
    }
    updatedMember(id, editedMember);
    navigate("/team");
  }

  useEffect(() => {
    getOneMember(id);
  }, []);

  useEffect(() => {
    if (oneMember) {
      setName(oneMember.name);
      setLastName(oneMember.lastName);
      setBio(oneMember.bio);
      setMemberPhoto(oneMember.memberPhoto);
    }
  }, [oneMember]);

  return (
    <div id="body">
      <h1 className="label">
        <span>Edit Member</span>
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
            id="input"
            label="Name"
            variant="outlined"
          />

          <TextField
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            style={{ margin: "10px" }}
            id="input"
            label="Last Name"
            variant="outlined"
          />

          <TextField
            value={bio}
            onChange={e => setBio(e.target.value)}
            style={{ margin: "10px" }}
            id="input"
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
            Save
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default EditMemberForm;
