import React from "react";
import { NavBar } from "./components/NavBar";
import { ProductoProvider } from "./context/productoProvider";

export const CarritoApp = () => {
  return (
    <ProductoProvider>
      <div className="container">
        <NavBar></NavBar>
      </div>
    </ProductoProvider>
  );
};
