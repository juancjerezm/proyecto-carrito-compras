import { useState } from "react";
import "../styles/card.css";

export const Card = ({
  imagen,
  titulo,
  descripcion,
  precio,
  handleAgregar,
  handleQuitar,
  handleAumentar,
  handleDisminuir,
}) => {
  const [added, setAdded] = useState(false);
  const setAgregar = () => {
    handleAgregar();
    setAdded(true);
  };

  const setQuitar = () => {
    handleQuitar();
    setAdded(false);
  };

  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h2 className="tarjeta-titulo">{titulo}</h2>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="tarjeta-precio">{precio}</p>
        {added ? (
          <button type="button" className="boton-quitar" onClick={setQuitar}>
            Quitar del Carrito
          </button>
        ) : (
          <button type="button" className="boton-agregar" onClick={setAgregar}>
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  );
};
