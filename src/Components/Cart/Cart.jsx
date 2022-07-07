import React, { useContext, useEffect } from "react";
import { Container, IconButton, Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import InfoIcon from "@mui/icons-material/Info";
import { cartContext } from "../../Contexts/cartContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const { getCart, cart, changeProductCount, removeProductFromCart } =
    useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);

  console.log(cart);

  return (
    <Container
      sx={{
        display: "flex",
        margin: "0 auto",
        flexDirection: "column",
      }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Count</TableCell>
              <TableCell align="right">SubPrice</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart &&
              cart?.products.map(row => (
                <TableRow
                  key={row.item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.item.title}
                  </TableCell>
                  <TableCell align="right">{row.item.price}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() =>
                        changeProductCount(row.count - 1, row.item.id)
                      }
                      aria-label="delete">
                      <RemoveIcon />
                    </IconButton>
                    {row.count}
                    <IconButton
                      onClick={() =>
                        changeProductCount(row.count + 1, row.item.id)
                      }
                      aria-label="delete">
                      <AddIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">{row.subPrice}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() => removeProductFromCart(row.item.id)}
                      aria-label="delete">
                      <DeleteForeverIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        style={{
          margin: "30px 20px",
          display: "flex",
          justifyContent: "flex-end",
        }}>
        <Box>
          <Typography variant="h6" gutterBottom component="div">
            Total: {cart && cart?.totalPrice}
          </Typography>
          <Button style={{ width: "100%" }} variant="contained" id="send">
            Proceed to checkout
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
