import { useState } from "react";
import "../styles/card.css";
import { limitarTexto } from "../utils/limiteTexto";

export const Card = ({
  imagen,
  titulo,
  descripcion,
  precio,
  handleAgregar,
  handleQuitar,
  handleAumentar,
  handleDisminuir,
  numeroMaxPalabras,
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

  const descripcionRecortada = limitarTexto(
    descripcion,
    numeroMaxPalabras || 15
  );

  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcionRecortada}</p>
        <p className="tarjeta-precio">{precio}</p>
      </div>
      <>
        {" "}
        {added ? (
          <button type="button" className="boton-quitar" onClick={setQuitar}>
            Quitar del Carrito
          </button>
        ) : (
          <button type="button" className="boton-agregar" onClick={setAgregar}>
            Agregar al carrito
          </button>
        )}
      </>
    </div>
  );
};
