export default function handleFileChange (e, setImagenes) {
    const archivos = Array.from(e.target.files);
    const imagenesArray = archivos.map(file => URL.createObjectURL(file));
    setImagenes(imagenesArray);
  };