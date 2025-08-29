// componentes/Hoja.jsx
import ObtenerMedidasFoto from "./ObtenerMedidasFoto";
import ObtenerGridLayout from "./ObtenerGridLayout";
import debeRotar from "./debeRotar";
import ObtenerMedidasMarco from "./ObtenerMedidasMarco";

export default function HojaA4({ grupo, paginaIndex, tamaño }) {
  return (
    <div className="flex flex-col items-center mb-8">
      <p className="text-sm text-gray-500 mb-2">Hoja {paginaIndex + 1}</p>

      <div
        id={`hoja-${paginaIndex}`}
        style={{transform: 'scale(0.7)', transformOrigin: 'top'}}
        className={`border border-gray-500 w-[794px] h-[1123px] bg-white overflow-hidden p-2 grid gap-2 justify-items-center items-center ${ObtenerGridLayout(grupo.length)}`}      >
        {grupo.map((src, index) => (
  <div key={index} className="flex items-center justify-center">
    {src ? (
      <img
        src={src}
        alt={`foto-${paginaIndex}-${index}`}
        className={`${ObtenerMedidasFoto(tamaño)} object-cover rounded shadow ${debeRotar(tamaño) ? 'rotate-90' : ''}`}
      />
    ) : (
      <div 
        className={`${ObtenerMedidasMarco(tamaño)} bg-white  flex items-center justify-center`}
      />
    )}
  </div>
))}


      </div>
    </div>
  );
}
