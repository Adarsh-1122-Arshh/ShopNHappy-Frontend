import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BazaarHome } from "./BaazrHome/Component/BazaarHome";
import { SignUpComponent } from "./SignUpPages/Components/SignUpPage";
import ProductListComponent from "./productListPages/Components/ProductListComponent";
import { LoginComponent } from "./LoginPage/Components/LoginComponent";


export const BazaarExchange = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/SignUp"
            element={<SignUpComponent />}
          />

          <Route
            path="/Login"
            element={<LoginComponent />}
          />

          <Route
            path="/"
            element={<BazaarHome />}
          />

          <Route
            path="/products"
            element={<ProductListComponent />}
          />

        </Routes>
      </BrowserRouter>

    </div>
  )
}
