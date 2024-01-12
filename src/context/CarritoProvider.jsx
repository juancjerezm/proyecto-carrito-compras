import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";
import * as carritoActions from "./carritoActions";
import { comprasReducer } from "./carritoReducer";

export const CarritoProvider = ({ children }) => {
  const { agregarCompra, aumentarCompra, disminuirCompra, eliminarCompra } =
    carritoActions;

  const initialState = [];
  const [stateListaCompras, dispatch] = useReducer(
    comprasReducer,
    initialState
  );
  return (
    <CarritoContext.Provider
      value={{
        stateListaCompras,
        agregarCompra: (compra) => dispatch(agregarCompra(compra)),
        aumentarCompra: (id) => dispatch(aumentarCompra(id)),
        disminuirCompra: (id) => dispatch(disminuirCompra(id)),
        eliminarCompra: (id) => dispatch(eliminarCompra(id)),
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
