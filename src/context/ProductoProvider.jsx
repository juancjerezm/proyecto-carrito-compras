import { useState, useEffect } from "react";
import { ProductoContext } from "./ProductoContext";

export const ProductoProvider = ({ children }) => {
  const urlBase = "https://fakestoreapi.com/products";

  // state para almacenar los productos
  const [productos, setProductos] = useState([]);

  const fetchProductos = async () => {
    try {
      const response = await fetch(urlBase);
      const data = response.json();
      setProductos(data);
    } catch (error) {
      console.error("Error al traer los productos: ", error);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <ProductoContext.Provider value={productos}>
      {children}
    </ProductoContext.Provider>
  );
};
