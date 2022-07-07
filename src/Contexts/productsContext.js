import React, { useReducer } from "react";
import axios from "axios";

export const productsContext = React.createContext();

const API = "http://localhost:8002/products";
const INITIAL_STATE = {
  products: [],
  oneProduct: null,
  pages: 0,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 3),
      };
    case "GET_ONE_PRODUCT":
      return {
        ...state,
        oneProduct: action.payload,
      };
    default:
      return state;
  }
}

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  async function createProduct(newProduct) {
    await axios.post(API, newProduct);
  }

  async function getProducts() {
    let response = await axios.get(`${API}${window.location.search}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: response,
    });
  }

  async function getOneProduct(id) {
    let response = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: response.data,
    });
  }

  async function updatedProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    getOneProduct();
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        oneProduct: state.oneProduct,
        editedProduct: state.editedProduct,
        pages: state.pages,
        createProduct,
        getProducts,
        getOneProduct,
        updatedProduct,
        deleteProduct,
      }}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
