export default function FormularioOption ({tamaño, setTamaño}){
    return(
        <select value={tamaño} onChange={(e)=> setTamaño(e.target.value)} className="mb-4 border p-1">
            <option value="10x15">10x15</option>
            <option value="13x18">13x18</option>
            <option value="9x13">9x13</option>
            <option value="6x8">6x8</option>
            <option value="">seleccionar</option>
        </select>
    )
}