import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import Aboutpage from "./landing_page/about/Aboutpage";
import ProductsPage from "./landing_page/products/ProductsPage"
import Pricingpage  from "./landing_page/pricing/Pricingpage";
import Supportpage from  "./landing_page/support/Supportpage";
import NotFound from "./landing_page/Notfound";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/about" element={<Aboutpage/>}></Route>
      <Route path="/product" element={<ProductsPage/>}></Route>
      <Route path="/pricing" element={<Pricingpage/>}></Route>
      <Route path="/support" element={<Supportpage/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
);