export const agregarCompra = (compra) => {
  compra.cantidad = 1;
  const action = {
    type: "AGREGAR_COMPRA",
    payload: compra,
  };
  return action
};

export const aumentarCompra = (id) => {
  const action = {
    type: "AUMENTAR_CANTIDAD",
    payload: id,
  };
  return action
};

export const disminuirCompra = (id) => {
  const action = {
    type: "DISMINUIR_CANTIDAD",
    payload: id,
  };
  return action
};

export const eliminarCompra = (id) => {
  const action = {
    type: "ELIMINAR_PRODUCTO",
    payload: id,
  };
  return action
};
