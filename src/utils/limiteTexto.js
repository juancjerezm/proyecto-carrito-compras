export const limitarTexto = (texto, limitePalabras) => {
  const palabras = texto.split(" ");
  if (palabras.length <= limitePalabras) return texto;
  else {
    const textoRecortado = palabras.slice(0, limitePalabras).join(" ");
    return `${textoRecortado}...`;
  }
};
