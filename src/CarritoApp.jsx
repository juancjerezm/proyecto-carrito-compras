import React from "react";
import { NavBar } from "./components/NavBar";
import { ProductoProvider } from "./context/productoProvider";
import { CarritoProvider } from "./context/CarritoProvider";

export const CarritoApp = () => {
  return (
    <ProductoProvider>
      <CarritoProvider>
        <div className="container">
          <NavBar></NavBar>
        </div>
      </CarritoProvider>
    </ProductoProvider>
  );
};
