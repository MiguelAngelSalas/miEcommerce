export default function ObtenerGridLayout(cantidad){
    console.log(cantidad);
    switch (cantidad) {
      case 9: return 'grid-cols-3 grid-rows-3';
      case 4: return 'grid-cols-2 grid-rows-2';
      case 2: return 'grid-cols-1 grid-rows-2';
      case 1: return 'grid-cols-1 grid-rows-1';
      default: return 'grid-cols-1 grid-rows-1';
    }
  };