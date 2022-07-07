import React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Box, Container, Slider } from "@mui/material";
import { grey } from "@mui/material/colors";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.2),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.35),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  // border: "1px solid grey",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "400px",
    },
  },
}));

const Filters = ({ search, setSearch, price, setPrice }) => {
  return (
    <Container maxWidth="md">
      <Box style={{ display: "flex", marginTop: "20px", marginBottom: "25px" }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={e => setSearch(e.target.value)}
            value={search}
          />
        </Search>
        <Slider
          style={{
            width: "240px",
            marginLeft: "25px",
            marginRight: "20px",
            color: grey[700],
          }}
          getAriaLabel={() => "Temperature range"}
          value={price}
          onChange={(e, value) => setPrice(value)}
          valueLabelDisplay="auto"
          min={15}
          max={200}
          step={10}
        />
      </Box>
    </Container>
  );
};

export default Filters;
