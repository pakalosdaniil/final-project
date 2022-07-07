import React from "react";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Routing from "./Routing";

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Contexts/authContext";
import TeamContextProvider from "./Contexts/teamContext";
import CartProvider from "./Contexts/cartContext";
import ProductsContextProvider from "./Contexts/productsContext";

const App = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <CartProvider>
          <TeamContextProvider>
            <BrowserRouter>
              <Header />
              <Routing />
              <Footer />
            </BrowserRouter>
          </TeamContextProvider>
        </CartProvider>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
