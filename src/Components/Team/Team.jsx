import { Box, Button, Container, Pagination } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { teamContext } from "../../Contexts/teamContext";
import MemberCard from "../MemberCard/MemberCard";
import "../../App.css";
import { authContext } from "../../Contexts/authContext";

const Team = () => {
  const navigate = useNavigate();

  const { getTeam, team, pages } = useContext(teamContext);
  const { currentUser, admin } = useContext(authContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
    setSearchParams({
      _page: page,
      _limit: 3,
    });
  }, [page]);

  useEffect(() => {
    getTeam();
  }, [searchParams]);

  useEffect(() => {
    getTeam();
  }, []);

  return (
    <>
      <div id="body">
        {admin ? (
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={() => navigate("/add-member")}
              style={{ width: "30%", height: "65px" }}
              variant="contained"
              id="add-button">
              add new member
            </Button>
          </Box>
        ) : (
          <h1 className="label">
            <span>our crew</span>
          </h1>
        )}
      </div>
      <Container>
        <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-evenly"}>
          {team.map(item => (
            <MemberCard key={item.id} item={item} />
          ))}
        </Box>
        <Box
          style={{ display: "flex", justifyContent: "center" }}
          margin={"20px"}>
          <Pagination
            page={page}
            count={isNaN(pages) ? 0 : pages}
            shape="rounded"
            size="large"
            onChange={(e, value) => setPage(value)}
          />
        </Box>
      </Container>
    </>
  );
};

export default Team;
