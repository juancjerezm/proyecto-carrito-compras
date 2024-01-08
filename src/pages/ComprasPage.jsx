import { Card } from "../components/Card";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { ProductoContext } from "../context/ProductoContext";

export const ComprasPage = () => {
  const productos = useContext(ProductoContext);
  const { stateListaCompras, agregarCompra, eliminarCompra } =
    useContext(CarritoContext);

  const handleAgregar = (compra) => {
    agregarCompra({ ...compra });
  };

  const handleQuitar = (id) => {
    eliminarCompra(id);
  };

  return (
    <>
      <h1>Mi carrito de compras</h1>
      <div className="tarjeta-contenido">
        {productos && productos.map((producto) => {
          return (
            <Card
              key={producto.id}
              imagen={producto.image}
              titulo={producto.title}
              precio={producto.price}
              handleAgregar={() => handleAgregar(producto)}
              handleQuitar={() => handleQuitar(producto.id)}
            ></Card>
          );
        })}
      </div>
    </>
  );
};
