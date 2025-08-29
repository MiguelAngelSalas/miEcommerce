export default function ObtenerMedidasFoto (tamaño) {
    switch (tamaño) {
      case '13x18': return 'w-[492px] h-[680px]';
      case '9x13': return 'w-[255px] h-[369px]';
      case '10x15': return 'w-[340px] h-[567px]';
      case '6x8': return 'w-[170px] h-[226px]';
      default: return 'w-[794px] h-[1123px]';
    }
  };