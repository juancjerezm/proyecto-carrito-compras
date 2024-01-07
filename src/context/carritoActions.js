export const agregarCompra = (compra) => {
  compra.cantidad = 1;
  const action = {
    type: "AGREGAR_COMPRA",
    payload: compra,
  };
};

export const aumentarCompra = (id) => {
  const action = {
    type: "AUMENTAR_CANTIDAD",
    payload: id,
  };
};

export const disminuirCompra = (id) => {
  const action = {
    type: "DISMINUIR_CANTIDAD",
    payload: id,
  };
};

export const eliminarCompra = (id) => {
  const action = {
    type: "ELIMINAR_PRODUCTO",
    payload: id,
  };
};
