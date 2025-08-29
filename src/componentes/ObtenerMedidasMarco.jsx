import debeRotar from "./debeRotar";

function ObtenerMedidasMarco(tamaño) {
  const rotado = debeRotar(tamaño);
  if (rotado) {
    // Si hay que rotar, invertimos ancho y alto
    return "w-[150px] h-[100px]";
  } else {
    return "w-[100px] h-[150px]";
  }
}
export default ObtenerMedidasMarco;