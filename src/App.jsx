import { useState } from 'react';
import fotoDos from '/fotoDos.jpg';

function App() {
  const [tamaño, setTamaño] = useState('10x15');
const obtenerCantidadPorHoja = (tamaño) => {
  switch (tamaño) {
    case '6x8':
      return 9;
    case '9x13':
      return 4;
    case '10x15':
      return 2;
    case '13x18':
      return 2;
    default:
      return 1;
  }
};

const debeRotar = (tamaño) => {
  switch (tamaño) {
    case '13x18':
    case '10x15':
      return true; // se acomodan mejor en horizontal
    case '9x13':
    case '6x8':
      return false; // verticales funcionan bien
    default:
      return false;
  }
};

const obtenerGridLayout = (cantidad) => {
  switch (cantidad) {
    case 9:
      return 'grid-cols-3 grid-rows-3';
    case 4:
      return 'grid-cols-2 grid-rows-2';
    case 2:
      return 'grid-cols-1 grid-rows-2';
    case 1:
      return 'grid-cols-1 grid-rows-1';
    default:
      return 'grid-cols-1 grid-rows-1';
  }
};

const esVertical = (tamaño) => {
  switch (tamaño) {
    case '9x13':
    case '10x15':
    case '13x18':
    case '6x8':
      return true; // todas son más altas que anchas
    default:
      return true;
  }
};

///* Función para obtener las medidas de la foto según el tamaño seleccionado
  
const obtenerMedidasFoto = (tamaño) => {
  switch (tamaño) {
    case '13x18':
      return 'w-[492px] h-[680px]'; // Escalado para pantalla
    case '9x13':
      return 'w-[255px] h-[369px]';
    case '10x15':
      return 'w-[340px] h-[567px]'; // Corregido
    case '6x8':
      return 'w-[170px] h-[226px]'; // Escalado para que entren varias en A4
    default:
      return 'w-[794px] h-[1123px]';
  }
};  

const [imagenes, setImagenes] = useState([]);
const handleFileChange = (e)=>{
  const archivos = Array.from(e.target.files);
  const imagenesArray = archivos.map((archivo)=>URL.createObjectURL(archivo));
  setImagenes(imagenesArray);
}

  return (
    <div className="flex flex-col items-center p-4">
      <select value={tamaño} onChange={(e) => setTamaño(e.target.value)} className="mb-4 border p-1">
        <option value="10x15">10x15</option>
        <option value="13x18">13x18</option>
        <option value="9x13">9x13</option>
        <option value="6x8">6x8</option>
        <option value="">seleccionar</option>
      </select>

      {/* Div siempre con tamaño de hoja A4 */}
      <div className={`border border-gray-500 w-[794px] h-[1123px] bg-white overflow-hidden mb-4 p-6 grid gap-6 justify-items-center items-center ${obtenerGridLayout(obtenerCantidadPorHoja(tamaño))}`}>
        {imagenes.slice(0, obtenerCantidadPorHoja(tamaño)).map((src, index) => (
          <div key={index} className="flex items-center justify-center">
            <img src={src} alt={`foto-${index}`} className={`${obtenerMedidasFoto(tamaño)} object-cover rounded shadow ${debeRotar(tamaño) ? 'rotate-90' : ''}`}/>
          </div>
        ))}
      </div>
      <form className='my-4' action="">
        <label htmlFor="files">Seleccion de fotos</label><br />
        <input className='bg-red-400 rounded hover:bg-fuchsia-700 hover:text-white p-1' type="file" id='files' name='files' multiple onChange={handleFileChange}  /><br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;