import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productsContext } from "../../Contexts/productsContext";

// title, description, price, image
const EditProductForm = () => {
  const { getOneProduct, oneProduct, updatedProduct } =
    useContext(productsContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  function handleValues() {
    let editedProduct = {
      title,
      description,
      price: +price,
      image,
    };
    if (!title.trim() || !description.trim() || !price || !image.trim()) {
      alert("Use your power to fill all gaps");
      return;
    }
    updatedProduct(id, editedProduct);
    navigate("/products");
  }
  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setDescription(oneProduct.description);
      setPrice(oneProduct.price);
      setImage(oneProduct.image);
    }
  }, [oneProduct]);

  return (
    <div id="body">
      <h1 className="label">
        <span>Edit Product</span>
      </h1>
      <Container maxWidth="sm">
        <Box
          paddingTop={"30px"}
          display={"flex"}
          flexDirection={"column"}
          textAlign={"center"}>
          <TextField
            value={title}
            onChange={e => setTitle(e.target.value)}
            style={{ margin: "10px" }}
            label="Title"
            variant="outlined"
          />

          <TextField
            value={description}
            onChange={e => setDescription(e.target.value)}
            style={{ margin: "10px" }}
            label="Description"
            variant="outlined"
          />

          <TextField
            type="number"
            value={price}
            onChange={e => setPrice(+e.target.value)}
            style={{ margin: "10px" }}
            label="Price"
            variant="outlined"
          />

          <TextField
            value={image}
            onChange={e => setImage(e.target.value)}
            style={{ margin: "10px" }}
            label="Image"
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

export default EditProductForm;
