import React from "react";
import { Route, Routes } from "react-router-dom";
// BrowserRouter,
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import BarberService from "./Components/BarbershopService/BarberService";
import Contacts from "./Components/Contacts/Contacts";
// import Header from "./Components/Header/Header";
import Team from "./Components/Team/Team";
import Careers from "./Components/Careers/Careers";
// import Footer from "./Components/Footer/Footer";
import SignUpForm from "./Components/SingUpForm/SignUpForm";
import LogInForm from "./Components/LogInForm/LogInForm";
import Profile from "./Components/Profile/Profile";
import AddMemberForm from "./Components/AddMemberForm/AddMemberForm";
import EditMemberForm from "./Components/EditMemberForm/EditMemberForm";
import MemberDetails from "./Components/MemberDetails/MemberDetails";
import Cart from "./Components/Cart/Cart";
import ProductsLists from "./Components/ProductsList/ProductsList";
import EditProductForm from "./Components/EditProductForm/EditProductForm";
import AddProductFrom from "./Components/AddProductForm/AddProductForm";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<BarberService />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/shop" element={<ProductsLists />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:id" element={<MemberDetails />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/add-member" element={<AddMemberForm />} />
        <Route path="/edit/:id" element={<EditMemberForm />} />
        <Route path="/product-edit/:id" element={<EditProductForm />} />
        <Route path="/add-product" element={<AddProductFrom />} />
      </Routes>
    </div>
  );
};

export default Routing;
