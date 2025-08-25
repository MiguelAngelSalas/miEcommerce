
export default function Boton({ className='', onClick, texto, testId }) {
  return (
<button className={`bg-amber-400 py-2 px-4 hover:bg-red-400 rounded ${className}`}
 data-testid = {testId} onClick={onClick}>{texto}</button>
  );
}