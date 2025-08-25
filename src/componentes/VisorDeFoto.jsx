import React from "react";

const SIZES = [
  { label: "Hoja entera", width: 800, height: 1000 },
  { label: "20x25", width: 500, height: 625 },
  { label: "13x18", width: 325, height: 450 },
  { label: "10x15", width: 250, height: 375 },
  { label: "9x13", width: 225, height: 325 },
];

export default function VisorDeFoto({ srcs, open, onClose }) {
  const [size, setSize] = React.useState(SIZES[0]);

  if (!open || !srcs || srcs.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <div className="flex gap-2 mb-4">
          {SIZES.map((s) => (
            <button
              key={s.label} 
              className={`px-3 py-1 rounded ${size.label === s.label ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              onClick={()=> setSize(s)}>
              
                {s.label}
            </button>
            ))}
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
            {srcs.map((src, idx)=>(
                <img src={src} alt={`visor-${idx}`}
                style={{width: size.width, height: size.height, objectFit: 'cover'}}
                className='border rounded' />
            ))}
        </div>
        <button className='mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
                onClick={onClose}> Cerrar
        </button>
      </div>
    </div>
  );
}