import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { teamContext } from "../../Contexts/teamContext";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { grey } from "@mui/material/colors";
import { authContext } from "../../Contexts/authContext";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MemberCard = ({ item }) => {
  const { admin } = useContext(authContext);

  const navigate = useNavigate();
  const { deleteMember } = useContext(teamContext);

  return (
    <Card
      sx={{
        opacity: "0.8",
        transition: "0.5s ease-in-out",
        "&:hover": { opacity: 1 },
        border: "2px solid #1a1a1a",
        margin: 1,
        maxWidth: 300,
        width: { xs: "220px", sm: "230px", md: "230px", lg: "300px" },
      }}
      elevation={0}>
      <CardActionArea>
        <CardMedia component="img" height="%" image={item.memberPhoto} />
        <CardContent onClick={() => navigate(`/team/${item.id}`)}>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {item.lastName}
          </Typography>
        </CardContent>
      </CardActionArea>
      {admin ? (
        <CardActions>
          <Button onClick={() => navigate(`/edit/${item.id}`)}>
            <EditIcon sx={{ color: grey[800] }} />
          </Button>
          <Button onClick={() => deleteMember(item.id)}>
            <DeleteIcon sx={{ color: grey[800] }} />
          </Button>
        </CardActions>
      ) : null}
    </Card>
  );
};

export default MemberCard;
