import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const CarritoPage = () => {
  const { stateListaCompras, aumentarCompra, disminuirCompra, eliminarCompra } =
    useContext(CarritoContext);

  const calcularTotal = () => {
    return stateListaCompras
      .reduce((total, item) => total + item.price * item.cantidad, 0)
      .toFixed(2);
  };
  const hamdleImpresion = () => {
    window.print();
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {stateListaCompras.map((item) => (
            <tr key={item.id}>
              <th>{item.title}</th>
              <td>{item.price}</td>
              <td>
                <button
                  className="btn btn-ouline-primary"
                  onClick={() => disminuirCompra(item.id)}
                >
                  -
                </button>
                <button className="btn btn-primary">{item.cantidad}</button>
                <button
                  className="btn btn-ouline-primary"
                  onClick={() => aumentarCompra(item.id)}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => eliminarCompra(item.id)}
                >
                  eliminar
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <b>TOTAL: </b>
            </td>

            <td></td>
            <td></td>
            <td>${calcularTotal()}</td>
          </tr>
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          onClick={hamdleImpresion}
          disabled={stateListaCompras < 1}
        >
          Comprar
        </button>
      </div>
    </>
  );
};
