import { useState } from "react";
import html2canvas from "html2canvas";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import FormularioOption from "./componentes/FormularioOption";
import ObtenerCantidadPorHoja from "./componentes/ObtenerCantidadPorHoja";
import DividirEnPaginas from "./componentes/DividirEnPaginas";
import handleFileChange from "./componentes/handleFileChange";
import HojaA4 from "./componentes/HojaA4";
import "./App.css";

function App() {
  async function capturarYExportar() {
  const zip = new JSZip();

  for (let i = 0; i < paginas.length; i++) {
    const elemento = document.getElementById(`hoja-${i}`);
    if (!elemento) continue;

    const canvas = await html2canvas(elemento, {
      scale: 2,
      useCORS: true
    });

    const imgData = canvas.toDataURL("image/jpeg").split(",")[1];
    zip.file(`hoja${i + 1}.jpg`, imgData, { base64: true });
  }

  const contenido = await zip.generateAsync({ type: "blob" });
  saveAs(contenido, "hojas.zip");
}

  const [tamaño, setTamaño] = useState("10x15");
  const [imagenes, setImagenes] = useState([]);

  function rellenarGrupo(grupo, cantidadPorHoja) {
    const copia = [...grupo];
    while (copia.length < cantidadPorHoja) {
      copia.push(null); // Espacio vacío
    }
    return copia;
  }

  const cantidadPorHoja = ObtenerCantidadPorHoja(tamaño);
  const paginas = DividirEnPaginas(imagenes, cantidadPorHoja).map((grupo) =>
    rellenarGrupo(grupo, cantidadPorHoja)
  );

  

  return (
      <div className="p-4">
        <div className="flex flex-col items-center gap-4">
          <FormularioOption tamaño={tamaño} setTamaño={setTamaño} />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 my-4" onClick={capturarYExportar} >Exportar hojas como ZIP</button>
        </div>
        <div className="flex flex-wrap justify-center mt-6" >
            {paginas.map((grupo, paginaIndex) => (
              <div key={paginaIndex} className="hoja-escalada">
                <HojaA4 grupo={grupo}
                    paginaIndex={paginaIndex} tamaño={tamaño}
                />
              </div>
            ))}
        </div>
        {/* Input de imágenes */}
        <form className="my-6 text-center" action="">
          <label htmlFor="files">Seleccion de fotos</label>
          <br />
          <input
            className="bg-red-400 rounded hover:bg-fuchsia-700 hover:text-white p-1"
            type="file"
            id="files"
            name="files"
            multiple
            onChange={(e) => handleFileChange(e, setImagenes)}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
  );
}

export default App;
