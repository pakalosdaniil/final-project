import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../Contexts/cartContext";
import { authContext } from "../../Contexts/authContext";
import { productsContext } from "../../Contexts/productsContext";
import { grey } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

const ProductCard = ({ item }) => {
  const { admin } = useContext(authContext);

  const navigate = useNavigate();
  const { deleteProduct } = useContext(productsContext);
  const { addProductToCart, checkProductInCart } = useContext(cartContext);
  const [checkProduct, setCheckProduct] = useState(checkProductInCart(item));
  return (
    <Card
      sx={{
        maxWidth: 300,
        margin: "10px",
        opacity: "0.8",
        transition: "0.5s ease-in-out",
        "&:hover": { opacity: 1 },
        border: "2px solid #1a1a1a",
      }}
      elevation={0}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="400"
        image={item.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description.length > 20
            ? `${item.description.slice(0, 20)}...`
            : item.description}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          ${item.price}
        </Typography>
      </CardContent>
      <CardActions>
        {admin ? (
          <>
            <Button size="small" onClick={() => deleteProduct(item.id)}>
              <DeleteIcon sx={{ color: grey[800] }} />
            </Button>
            <Button
              size="small"
              onClick={() => navigate(`/product-edit/${item.id}`)}>
              <EditIcon sx={{ color: grey[800] }} />
            </Button>
          </>
        ) : null}
        <Button
          onClick={() => {
            addProductToCart(item);
            setCheckProduct(checkProductInCart(item));
          }}
          size="small">
          {checkProduct ? (
            <StarIcon style={{ fontSize: "30px" }} sx={{ color: grey[800] }} />
          ) : (
            <StarBorderIcon
              style={{ fontSize: "30px" }}
              sx={{ color: grey[800] }}
            />
          )}
        </Button>
        <Button
          onClick={() => {
            addProductToCart(item);
            setCheckProduct(checkProductInCart(item));
          }}
          size="small">
          {checkProduct ? (
            <ShoppingCartIcon
              style={{ fontSize: "30px" }}
              sx={{ color: grey[800] }}
            />
          ) : (
            <ShoppingCartOutlinedIcon
              style={{ fontSize: "30px" }}
              sx={{ color: grey[800] }}
            />
          )}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
