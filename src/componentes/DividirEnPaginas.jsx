
export default function DividirEnPaginas (imagenes, cantidadPorHoja) {
    const paginas = [];
    for (let i = 0; i < imagenes.length; i += cantidadPorHoja) {
      paginas.push(imagenes.slice(i, i + cantidadPorHoja));
    }
    return paginas;
  };