import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { teamContext } from "../../Contexts/teamContext";

const MemberDetails = () => {
  const { getOneMember, oneMember } = useContext(teamContext);
  console.log(oneMember);
  const params = useParams();
  const { id } = useParams();

  useEffect(() => {
    getOneMember(id);
  }, []);

  return (
    <div id="body">
      {oneMember ? (
        <>
          <h1 className="label">
            <span>Some details</span>
          </h1>
          <Container
            sx={{
              display: "flex",
              marginRight: "0",
              height: "500px",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
              },
            }}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              textAlign={"center"}
              justifyContent={"center"}>
              <Paper
                style={{
                  width: "300px",
                  height: "350px",
                }}>
                <img
                  style={{
                    borderRadius: "2px",
                    width: "300px",
                    height: "350px",
                  }}
                  src={oneMember.memberPhoto}
                  width="100%"
                  alt="member-photo"
                />
              </Paper>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", sm: "100%", md: "60%", lg: "60%" },
              }}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              textAlign={"center"}
              justifyContent={"center"}
              width={"60%"}
              height={"85%"}
              marginLeft={"15px"}>
              <Paper elevation={0}>
                <Typography variant="h5">{oneMember.name}</Typography>
                <Typography marginBottom={"50px"} variant="h5">
                  {oneMember.lastName}
                </Typography>
              </Paper>
              <Paper
                style={{
                  fontSize: "20px",
                }}
                elevation={0}>
                {oneMember.bio}
              </Paper>
            </Box>
          </Container>

          {/* <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            textAlign={"left"}
            margin={"0 auto"}
            marginTop={"20px"}
            maxWidth={"1000px"}>
            <Typography padding={"20px"} variant="h5">
              Comments
            </Typography>
            <Paper>
              <Typography padding={"20px"} variant="h5">
                gg
              </Typography>
            </Paper>
          </Box> */}
        </>
      ) : null}
    </div>
  );
};

export default MemberDetails;
