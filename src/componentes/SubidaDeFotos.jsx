import { useState } from "react";

const SIZES = [
  { label: "Hoja entera", width: 800, height: 1000, perPage: 1 },
  { label: "13x18", width: 325, height: 450, perPage: 2 },
  { label: "10x15", width: 250, height: 375, perPage: 2 },
  { label: "9x13", width: 225, height: 325, perPage: 4 },
];

const A4 = { width: 800, height: 1130 }; // Simulación de hoja A4

export default function SubidaDeFotos() {
  const [previews, setPreviews] = useState([]);
  const [size, setSize] = useState(SIZES[0]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews(newPreviews);
  };

  // Agrupa las imágenes por hoja
  const pages = [];
  for (let i = 0; i < previews.length; i += size.perPage) {
    pages.push(previews.slice(i, i + size.perPage));
  }

  // Decide orientación de la foto en la hoja
  const getPhotoStyle = (size) => {
  // Para 13x18 y 10x15, rotar para que el lado largo quede sobre el lado corto de la hoja
  if (size.label === "13x18" || size.label === "10x15") {
    return {
      width: size.height,
      height: size.width,
      transform: "rotate(90deg)",
    };
  }
  // Para los demás, sin rotar
  return {
    width: size.width,
    height: size.height,
    transform: "none",
    };
  };

  // Layout por tamaño
  const getGridStyles = () => {
    if (size.label === "9x13") {
      return {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: "32px",
        width: `${A4.width}px`,
        height: `${A4.height}px`,
        justifyItems: "center",
        alignItems: "center",
        background: "#fff",
        margin: "0 auto",
        border: "2px solid #ccc",
        borderRadius: "16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        overflow: "hidden",
        position: "relative",
      };
    }
    if (size.label === "13x18" || size.label === "10x15") {
      return {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "32px",
        width: `${A4.width}px`,
        height: `${A4.height}px`,
        background: "#fff",
        margin: "0 auto",
        border: "2px solid #ccc",
        borderRadius: "16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        overflow: "hidden",
        position: "relative",
      };
    }
    // Hoja entera
    return {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: `${A4.width}px`,
      height: `${A4.height}px`,
      background: "#fff",
      margin: "0 auto",
      border: "2px solid #ccc",
      borderRadius: "16px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
      overflow: "hidden",
      position: "relative",
    };
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <label
        htmlFor="file-upload"
        className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition"
      >
        Subir fotos
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleFileChange}
      />

      {previews.length > 0 && (
        <div className="flex flex-col items-center w-full gap-8">
          <div className="flex gap-2 mb-4">
            {SIZES.map((s) => (
              <button
                key={s.label}
                className={`px-3 py-1 rounded ${size.label === s.label ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                onClick={() => setSize(s)}
              >
                {s.label}
              </button>
            ))}
          </div>
          {pages.map((page, pageIdx) => (
            <div key={pageIdx} style={getGridStyles()}>
              {page.map((src, idx) => {
                const photoStyle = getPhotoStyle(size);
                return (
                  <div
                    key={idx}
                    style={{
                      width: photoStyle.width,
                      height: photoStyle.height,
                      transform: photoStyle.transform,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#fff",
                      border: "1px solid #bbb",
                      borderRadius: "8px",
                    }}
                  >
                    <img
                      src={src}
                      alt={`preview-${idx}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: size.label === "Hoja entera" ? "cover" : "contain",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}