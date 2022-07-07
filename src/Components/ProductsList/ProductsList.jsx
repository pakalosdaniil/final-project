import { Box, Button, Container, Pagination } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { authContext } from "../../Contexts/authContext";
import { productsContext } from "../../Contexts/productsContext";
import ProductCard from "../ProductCard/ProductCard";
import "../../App.css";
import Filters from "../Filter/Filters";

const ProductsLists = () => {
  const { admin } = useContext(authContext);
  const { getProducts, products, pages } = useContext(productsContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [price, setPrice] = useState([1, 10000]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setSearchParams({
      q: search,
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: 3,
    });
  }, [search, price, page]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div id="body">
        {admin ? (
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={() => navigate("/add-product")}
              style={{ width: "30%", height: "65px" }}
              variant="contained"
              id="add-button">
              add new product
            </Button>
          </Box>
        ) : (
          <h1 className="label">
            <span>shop vouchers</span>
          </h1>
        )}
      </div>
      <Container sx={{}}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <Filters
            search={search}
            setSearch={setSearch}
            price={price}
            setPrice={setPrice}
          />
        </div>
        <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
          {products.map(item => (
            <ProductCard key={item.id} item={item} />
          ))}
        </Box>
        <Box
          style={{ display: "flex", justifyContent: "center" }}
          margin={"20px"}>
          <Pagination
            page={page}
            count={isNaN(pages) ? 0 : pages}
            variant="outlined"
            shape="rounded"
            onChange={(e, value) => setPage(value)}
          />
        </Box>
      </Container>
    </>
  );
};

export default ProductsLists;
