function agruparEnHojas(imagenes, porHoja){
    const hojas = [];
    for (let i = 0; i<imagenes.length; i+=porHoja){
        const grupo = imagenes.slice(i, i+porHoja);
        while (grupo.length<porHoja){
            grupo.push(null); // Rellenar con null si no hay suficientes imágenes
        }
        hojas.push(grupo);
    }
    return hojas;
}