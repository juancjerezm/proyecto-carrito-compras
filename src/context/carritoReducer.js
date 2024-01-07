export const initialState = [];

export const comprasReducer = (state = initialState, action = []) => {
  switch (action.type) {
    case "AGREGAR_COMPRA":
      return [...state, action.payload];

    case "AUMENTAR_CANTIDAD":
      return state.map((item) => {
        const cant = item.cantidad + 1;
        if (item.id === action.payload) return { ...item, cantidad: cant };
        else return item;
      });

    case "DISMINUIR_CANTIDAD":
      return state.map((item) => {
        const cant = item.cantidad - 1;
        if (item.id === action.payload && item.cantidad > 1)
          return { ...item, cantidad: cant };
        else return item;
      });

    case "ELIMINAR_PRODUCTO":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};
