export default function ObtenerCantidadPorHoja (tamaño) {
    switch (tamaño) {
        case '6x8': return 9;
        case '9x13': return 4;
        case '10x15': return 2;
        case '13x18': return 2;
        default: return 1;

    }
  };