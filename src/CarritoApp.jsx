import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { CarritoPage } from "./pages/CarritoPage";
import { ComprasPage } from "./pages/ComprasPage";
import { ProductoProvider } from "./context/ProductoProvider";
import { CarritoProvider } from "./context/CarritoProvider";
export const CarritoApp = () => {
  return (
    <ProductoProvider>
      <CarritoProvider>
        <NavBar></NavBar>
        <div className="container">
          <Routes>
            <Route path="/" element={<ComprasPage />}></Route>
            <Route path="/carrito" element={<CarritoPage />}></Route>
            <Route path="/*" element={<Navigate to="/" />}></Route>
          </Routes>
        </div>
      </CarritoProvider>
    </ProductoProvider>
  );
};
